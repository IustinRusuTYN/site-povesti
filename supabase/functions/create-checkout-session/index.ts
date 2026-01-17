import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function isActiveLike(status: string | null | undefined) {
  // statusuri care înseamnă "există o subscripție" => nu mai facem checkout nou
  return ["active", "trialing", "past_due", "unpaid", "incomplete"].includes(
    String(status || "").toLowerCase(),
  );
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
    const SITE_URL = Deno.env.get("SITE_URL")!;

    const PRICE_BASIC_MONTHLY = Deno.env.get("PRICE_BASIC_MONTHLY")!;
    const PRICE_BASIC_YEARLY = Deno.env.get("PRICE_BASIC_YEARLY")!;
    const PRICE_PREMIUM_MONTHLY = Deno.env.get("PRICE_PREMIUM_MONTHLY")!;
    const PRICE_PREMIUM_YEARLY = Deno.env.get("PRICE_PREMIUM_YEARLY")!;

    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });

    // 1) Authorization header (obligatoriu)
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing Authorization header" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // 2) Supabase client "as user" (RLS OK)
    const supabaseAsUser = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: authData, error: authErr } = await supabaseAsUser.auth
      .getUser();
    if (authErr || !authData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const user = authData.user;

    // 3) body
    const { planId, billing } = await req.json();

    if (!["basic", "premium"].includes(planId)) {
      return new Response(JSON.stringify({ error: "Invalid planId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!["monthly", "yearly"].includes(billing)) {
      return new Response(JSON.stringify({ error: "Invalid billing" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const priceId = planId === "basic" && billing === "monthly"
      ? PRICE_BASIC_MONTHLY
      : planId === "basic" && billing === "yearly"
      ? PRICE_BASIC_YEARLY
      : planId === "premium" && billing === "monthly"
      ? PRICE_PREMIUM_MONTHLY
      : PRICE_PREMIUM_YEARLY;

    // 4) citim profilul ca să vedem dacă userul are deja abonament
    const { data: profile, error: profErr } = await supabaseAsUser
      .from("profiles")
      .select(
        "id, stripe_customer_id, stripe_subscription_id, subscription_status, subscription_plan",
      )
      .eq("id", user.id)
      .maybeSingle();

    if (profErr) throw profErr;

    let customerId = profile?.stripe_customer_id || null;
    let subscriptionId = profile?.stripe_subscription_id || null;

    // 5) dacă avem customer dar nu avem subscription_id în DB, încercăm să-l luăm din Stripe
    if (customerId && !subscriptionId) {
      const subs = await stripe.subscriptions.list({
        customer: customerId,
        status: "all",
        limit: 10,
      });

      // luăm prima activă/trialing/past_due etc.
      const activeSub = subs.data.find((s) => isActiveLike(s.status));
      if (activeSub) {
        subscriptionId = activeSub.id;

        // salvăm în DB ca să fie stabil pe viitor
        await supabaseAsUser
          .from("profiles")
          .update({ stripe_subscription_id: subscriptionId })
          .eq("id", user.id);
      }
    }

    const hasActiveSubscription = customerId && subscriptionId &&
      isActiveLike(profile?.subscription_status);

    // 6) dacă deja are un abonament activ:
    // - dacă încearcă să plătească același plan -> refuzăm (nu mai plătește de 2 ori)
    // - dacă vrea alt plan -> îl trimitem în Stripe Portal (upgrade/downgrade)
    if (hasActiveSubscription) {
      const currentPlan = profile?.subscription_plan || "free";

      if (currentPlan === planId) {
        return new Response(
          JSON.stringify({ error: "Already subscribed to this plan" }),
          {
            status: 409,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId!,
        return_url: `${SITE_URL}/profile?portal=return`,
        flow_data: {
          type: "subscription_update",
          subscription_update: { subscription: subscriptionId! },
        },
      });

      return new Response(
        JSON.stringify({ url: portalSession.url, mode: "portal" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // 7) dacă nu are customer, îl creăm
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email ?? undefined,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;

      await supabaseAsUser
        .from("profiles")
        .upsert({ id: user.id, stripe_customer_id: customerId }, {
          onConflict: "id",
        });
    }

    // 8) checkout nou (DOAR dacă nu are deja subscription activ)
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId!,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${SITE_URL}/profile?checkout=success`,
      cancel_url: `${SITE_URL}/subscribe?checkout=cancel`,
      metadata: { user_id: user.id, plan_id: planId, billing },
    });

    return new Response(
      JSON.stringify({ url: session.url, mode: "checkout" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message || "Server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
