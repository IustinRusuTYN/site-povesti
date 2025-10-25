import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

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

  const handleSubscribe = (planId) => {
    if (!user) return navigate("/signin");
    alert(t("subscribePage.alertSubscribed", { planId, billing }));
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
