import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

import BillingToggle from "../components/subscribe/billingToggle";
import PlanCard from "../components/subscribe/planCard";
import Testimonials from "../components/subscribe/testimonials";
import TrustSection from "../components/subscribe/trustSection";

import { useTranslation } from "react-i18next";

export default function Subscribe() {
  const { darkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  const { t } = useTranslation();

  // Preluăm planurile pentru limba curentă (returnObjects: true ca să fie array)
  const plans = t("subscribePage.plans", { returnObjects: true });

  const handleSubscribe = async (planId) => {
    if (!user) return navigate("/signin");

    const { data: sessionRes, error: sessionErr } =
      await supabase.auth.getSession();
    const session = sessionRes?.session;

    if (sessionErr || !session?.access_token) {
      console.error("No session:", sessionErr);
      return navigate("/signin");
    }

    const url = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/create-checkout-session`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ planId, billing }),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("Function error status:", res.status);
      console.error("Function error body:", json);
      alert(json?.error || "Payment init failed");
      return;
    }

    if (json?.url) {
      window.location.href = json.url;
    } else {
      console.error("No url returned:", json);
      alert("Payment init failed");
    }
  };

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
              />
            ))}
        </div>

        {/* Testimonials */}
        <Testimonials darkMode={darkMode} />

        {/* Trust Section */}
        <TrustSection darkMode={darkMode} />
      </main>
    </PageLayout>
  );
}
