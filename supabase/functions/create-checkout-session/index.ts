import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

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

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: req.headers.get("Authorization")! } },
    });

    const { data: authData, error: authErr } = await supabase.auth.getUser();
    if (authErr || !authData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const user = authData.user;
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

    // refolosim customer dacă există
    const { data: profile } = await supabase
      .from("profiles")
      .select("id, stripe_customer_id")
      .eq("id", user.id)
      .maybeSingle();

    let customerId = profile?.stripe_customer_id || null;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email ?? undefined,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;

      await supabase
        .from("profiles")
        .upsert({ id: user.id, stripe_customer_id: customerId }, {
          onConflict: "id",
        });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${SITE_URL}/profile?checkout=success`,
      cancel_url: `${SITE_URL}/subscribe?checkout=cancel`,
      metadata: { user_id: user.id, plan_id: planId, billing },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
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
