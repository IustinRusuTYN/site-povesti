import React, { useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../utils/supabase";

import BillingToggle from "../components/subscribe/billingToggle";
import PlanCard from "../components/subscribe/planCard";
import Testimonials from "../components/subscribe/testimonials";
import TrustSection from "../components/subscribe/trustSection";

import { useTranslation } from "react-i18next";

const ACTIVE_STATUSES = [
  "active",
  "trialing",
  "past_due",
  "unpaid",
  "incomplete",
];

export default function Subscribe() {
  const { darkMode } = useContext(ThemeContext);
  const { user, userProfile } = useContext(AuthContext); // ✅ luăm și userProfile
  const navigate = useNavigate();
  const location = useLocation();

  const [billing, setBilling] = useState("monthly");
  const { t } = useTranslation();

  const plans = t("subscribePage.plans", { returnObjects: true });

  const subscriptionStatus = (
    userProfile?.subscription_status || ""
  ).toLowerCase();
  const currentPlan = userProfile?.subscription_plan || "free";
  const hasActiveSubscription =
    currentPlan !== "free" && ACTIVE_STATUSES.includes(subscriptionStatus);

  // Dacă userul a apăsat cancel în Stripe
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("checkout") === "cancel") {
      alert(t("subscribePage.checkoutCanceled", "Payment was canceled."));
      navigate("/subscribe", { replace: true });
    }
  }, [location.search, navigate, t]);

  const callEdgeFunction = async (fnName, body) => {
    const { data: sessionRes, error: sessionErr } =
      await supabase.auth.getSession();
    const session = sessionRes?.session;

    if (sessionErr || !session?.access_token) {
      throw new Error("Not authenticated");
    }

    const url = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/${fnName}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(body || {}),
    });

    const json = await res.json().catch(() => ({}));
    return { res, json };
  };

  const handleSubscribe = async (planId) => {
    if (!user) return navigate("/signin");

    // ✅ dacă are deja abonament activ și apasă pe același plan -> nu-l lăsăm să plătească iar
    if (hasActiveSubscription && currentPlan === planId) {
      alert(t("subscribePage.alreadyOnPlan", "You already have this plan."));
      return;
    }

    try {
      // ✅ backend-ul tău acum:
      // - dacă are abonament activ => răspunde cu url de PORTAL
      // - dacă nu are => url de CHECKOUT
      const { res, json } = await callEdgeFunction("create-checkout-session", {
        planId,
        billing,
      });

      if (!res.ok) {
        // 409 = already subscribed la același plan (backend)
        if (res.status === 409) {
          alert(
            t("subscribePage.alreadyOnPlan", "You already have this plan.")
          );
          return;
        }
        console.error("create-checkout-session error:", res.status, json);
        alert(
          json?.error ||
            t("subscribePage.paymentInitFailed", "Payment init failed")
        );
        return;
      }

      if (json?.url) {
        window.location.href = json.url;
      } else {
        console.error("No url returned:", json);
        alert(t("subscribePage.paymentInitFailed", "Payment init failed"));
      }
    } catch (e) {
      console.error(e);
      alert(t("subscribePage.paymentInitFailed", "Payment init failed"));
    }
  };

  // (Opțional) buton „Manage” direct pe pagina Subscribe
  const handleManage = async () => {
    if (!user) return navigate("/signin");
    try {
      const { res, json } = await callEdgeFunction("create-portal-session", {
        action: "manage",
      });
      if (!res.ok) {
        console.error("create-portal-session error:", res.status, json);
        alert(json?.error || "Failed to open portal");
        return;
      }
      if (json?.url) window.location.href = json.url;
    } catch (e) {
      console.error(e);
      alert("Failed to open portal");
    }
  };

  const activeBannerText = useMemo(() => {
    if (!hasActiveSubscription) return null;
    const planLabel = t(`profile.plan.${currentPlan}`, currentPlan);
    return t(
      "subscribePage.currentSubscription",
      "Current subscription: {{plan}}",
      {
        plan: planLabel,
      }
    );
  }, [hasActiveSubscription, currentPlan, t]);

  return (
    <PageLayout>
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("subscribePage.hero.title")}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            {t("subscribePage.hero.description")}
          </p>

          {activeBannerText && (
            <div
              className={`mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <span>{activeBannerText}</span>
              <button
                type="button"
                onClick={handleManage}
                className={`px-3 py-1 rounded-md text-sm font-semibold ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-white hover:bg-gray-50 text-gray-800"
                }`}
              >
                {t("profile.subscription.manageSubscription", "Manage")}
              </button>
            </div>
          )}

          <BillingToggle
            billing={billing}
            setBilling={setBilling}
            darkMode={darkMode}
          />
        </div>

        {/* Plan Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {Array.isArray(plans) &&
            plans.map((p) => (
              <PlanCard
                key={p.id}
                plan={p}
                billing={billing}
                darkMode={darkMode}
                onSubscribe={handleSubscribe}
                // ❗ extra props (nu strică dacă PlanCard le ignoră)
                currentPlanId={currentPlan}
                hasActiveSubscription={hasActiveSubscription}
              />
            ))}
        </div>

        <Testimonials darkMode={darkMode} />
        <TrustSection darkMode={darkMode} />
      </main>
    </PageLayout>
  );
}
