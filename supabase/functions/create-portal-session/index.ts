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

    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });

    // 1) Authorization
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

    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) {
      return new Response(JSON.stringify({ error: "Missing Bearer token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2) validăm user
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: userRes, error: userErr } = await supabase.auth.getUser(
      token,
    );

    if (userErr || !userRes?.user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const user = userRes.user;

    // 3) citim profilul (as user, respectă RLS)
    const supabaseAsUser = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });

    const { data: profile, error: profileErr } = await supabaseAsUser
      .from("profiles")
      .select("id, stripe_customer_id, stripe_subscription_id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileErr) {
      return new Response(JSON.stringify({ error: profileErr.message }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const customerId = profile?.stripe_customer_id;
    if (!customerId) {
      return new Response(
        JSON.stringify({ error: "No Stripe customer found for this user." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // 4) ce vrea userul: manage sau cancel
    const body = await req.json().catch(() => ({}));
    const action = body?.action === "cancel" ? "cancel" : "manage";

    const returnUrl = `${SITE_URL}/profile?portal=return`;

    const sessionParams: any = {
      customer: customerId,
      return_url: returnUrl,
    };

    // dacă vrei să trimită userul direct pe flow de cancel
    if (action === "cancel" && profile?.stripe_subscription_id) {
      sessionParams.flow_data = {
        type: "subscription_cancel",
        subscription_cancel: {
          subscription: profile.stripe_subscription_id,
        },
      };
    }

    const portalSession = await stripe.billingPortal.sessions.create(
      sessionParams,
    );

    return new Response(JSON.stringify({ url: portalSession.url }), {
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
