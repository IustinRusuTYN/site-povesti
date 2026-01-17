import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

function mapFromPrice(priceId: string, env: Record<string, string>) {
  if (priceId === env.PRICE_BASIC_MONTHLY) {
    return { plan: "basic", billing: "monthly" };
  }
  if (priceId === env.PRICE_BASIC_YEARLY) {
    return { plan: "basic", billing: "yearly" };
  }
  if (priceId === env.PRICE_PREMIUM_MONTHLY) {
    return { plan: "premium", billing: "monthly" };
  }
  if (priceId === env.PRICE_PREMIUM_YEARLY) {
    return { plan: "premium", billing: "yearly" };
  }
  return { plan: "free", billing: null };
}

serve(async (req) => {
  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;
    const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY")!;

    const env = {
      PRICE_BASIC_MONTHLY: Deno.env.get("PRICE_BASIC_MONTHLY")!,
      PRICE_BASIC_YEARLY: Deno.env.get("PRICE_BASIC_YEARLY")!,
      PRICE_PREMIUM_MONTHLY: Deno.env.get("PRICE_PREMIUM_MONTHLY")!,
      PRICE_PREMIUM_YEARLY: Deno.env.get("PRICE_PREMIUM_YEARLY")!,
    };

    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });
    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const sig = req.headers.get("stripe-signature");
    if (!sig) return new Response("Missing stripe-signature", { status: 400 });

    // IMPORTANT pentru Deno: constructEventAsync (nu constructEvent)
    const rawBody = await req.text();
    const event = await stripe.webhooks.constructEventAsync(
      rawBody,
      sig,
      STRIPE_WEBHOOK_SECRET,
    );

    // 1) checkout finalizat (cel mai important)
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;

      const userId = session?.metadata?.user_id;
      const subscriptionId = session?.subscription;

      if (!userId || !subscriptionId) {
        return new Response("Missing session metadata", { status: 200 });
      }

      const sub = await stripe.subscriptions.retrieve(subscriptionId);

      const priceId = sub.items?.data?.[0]?.price?.id;
      const mapped = priceId
        ? mapFromPrice(priceId, env)
        : { plan: "free", billing: null };

      await admin
        .from("profiles")
        .update({
          subscription_plan: mapped.plan,
          subscription_billing: mapped.billing,
          subscription_status: sub.status,
          subscription_renew_date: new Date(sub.current_period_end * 1000)
            .toISOString(),
          stripe_subscription_id: subscriptionId,
        })
        .eq("id", userId);

      return new Response("ok", { status: 200 });
    }

    // 2) subscription update / delete
    if (
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const sub = event.data.object as any;

      const customerId = sub.customer as string;

      // 1) încercăm întâi din customer.metadata (dacă există)
      let userId: string | null = null;
      try {
        const customer = (await stripe.customers.retrieve(customerId)) as any;
        userId = customer?.metadata?.supabase_user_id || null;
      } catch {
        // ignorăm, vom folosi fallback DB
      }

      // 2) fallback sigur: căutăm userul după stripe_customer_id în profiles
      if (!userId) {
        const { data: prof, error: profErr } = await admin
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .maybeSingle();

        if (profErr) throw profErr;
        userId = prof?.id || null;
      }

      if (!userId) {
        // nu blocăm Stripe (altfel va retrimite la nesfârșit)
        return new Response("ok", { status: 200 });
      }

      const priceId = sub.items?.data?.[0]?.price?.id;
      const mapped = priceId
        ? mapFromPrice(priceId, env)
        : { plan: "free", billing: null };

      const renew = sub.current_period_end
        ? new Date(sub.current_period_end * 1000).toISOString()
        : null;

      const finalPlan = sub.status === "active" || sub.status === "trialing"
        ? mapped.plan
        : "free";

      await admin
        .from("profiles")
        .update({
          subscription_plan: finalPlan,
          subscription_billing: finalPlan === "free" ? null : mapped.billing,
          subscription_status: sub.status,
          subscription_renew_date: renew,
          stripe_subscription_id: sub.id, // important: păstrăm subscription id actual
        })
        .eq("id", userId);

      return new Response("ok", { status: 200 });
    }

    return new Response("ignored", { status: 200 });
  } catch (e) {
    // Stripe vede textul ăsta în Response (foarte util la debug)
    return new Response(`Webhook error: ${e.message}`, { status: 400 });
  }
});
