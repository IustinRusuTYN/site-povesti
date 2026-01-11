// src/components/profile/profilesubscription.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../utils/supabase";

export default function ProfileSubscription({ darkMode, userProfile }) {
  const { t, i18n } = useTranslation();
  const [loadingPortal, setLoadingPortal] = useState(false);

  const localeMap = { ro: "ro-RO", en: "en-GB", fr: "fr-FR" };
  const locale = localeMap[i18n.language] || i18n.language || "en-GB";

  const planId = userProfile?.subscription_plan || "free";
  const planLabel = t(`profile.plan.${planId}`, planId);

  const billing = userProfile?.subscription_billing || "monthly";

  const plans = t("subscribePage.plans", {
    returnObjects: true,
    defaultValue: [],
  });
  const planObj = Array.isArray(plans)
    ? plans.find((p) => p.id === planId)
    : null;

  const priceNumber =
    planId === "free"
      ? 0
      : billing === "yearly"
      ? planObj?.yearly ?? null
      : planObj?.monthly ?? null;

  const priceText =
    priceNumber === null
      ? t("common.na", "N/A")
      : new Intl.NumberFormat(locale, {
          style: "currency",
          currency: "EUR",
        }).format(priceNumber);

  const billingLabel =
    billing === "yearly"
      ? t("profile.subscription.year", "year")
      : t("profile.subscription.month", "month");

  const status =
    userProfile?.subscription_status ||
    (planId === "free" ? "inactive" : "active");

  const statusText =
    status === "active" || status === "trialing"
      ? t("profile.subscription.statusActive", "Active")
      : status === "canceled"
      ? t("profile.subscription.statusCanceled", "Canceled")
      : t("profile.subscription.statusInactive", "Inactive");

  const statusClass =
    status === "active" || status === "trialing"
      ? "bg-green-500"
      : status === "canceled"
      ? "bg-red-500"
      : "bg-gray-500";

  const renewDateRaw =
    userProfile?.subscription_renew_date || userProfile?.renew_date || null;

  const renewDateText = renewDateRaw
    ? new Date(renewDateRaw).toLocaleDateString(locale)
    : t("common.na", "N/A");

  const paymentMethod = t("profile.subscription.paymentValue", "Credit card");

  const openPortal = async (action = "manage") => {
    setLoadingPortal(true);
    try {
      const { data: sessionRes } = await supabase.auth.getSession();
      const session = sessionRes?.session;

      if (!session?.access_token) {
        alert("Not authenticated");
        return;
      }

      const url = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/create-portal-session`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ action }), // "manage" sau "cancel"
      });

      const json = await res.json();

      if (!res.ok) {
        console.error("Portal error:", json);
        alert(json?.error || "Failed to open billing portal");
        return;
      }

      if (json?.url) {
        window.location.href = json.url;
      }
    } finally {
      setLoadingPortal(false);
    }
  };

  const cardBg = darkMode
    ? "bg-gradient-to-r from-purple-900/40 to-pink-900/30"
    : "bg-gradient-to-r from-purple-50 to-pink-50";

  const textMain = darkMode ? "text-white" : "text-gray-900";
  const textMuted = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-xl shadow-lg ${cardBg}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className={`text-sm ${textMuted} mb-1`}>
              {t("profile.subscription.currentPlan", "Current plan")}
            </p>

            <h2 className={`text-2xl font-bold ${textMain}`}>{planLabel}</h2>

            <div className="mt-3">
              <p className={`text-sm ${textMuted}`}>
                {t("profile.subscription.price", "Price")}
              </p>
              <p className={`text-xl font-semibold ${textMain}`}>
                {priceText} / {billingLabel}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-sm ${textMuted}`}>
                {t("profile.subscription.statusLabel", "Subscription status")}:
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full ${statusClass} text-white text-xs font-semibold`}
              >
                {statusText}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div>
                <p className={`text-xs ${textMuted}`}>
                  {t("profile.subscription.renewDate", "Renewal date")}
                </p>
                <p className={`text-sm font-medium ${textMain}`}>
                  {renewDateText}
                </p>
              </div>

              <div>
                <p className={`text-xs ${textMuted}`}>
                  {t("profile.subscription.paymentMethod", "Payment method")}
                </p>
                <p className={`text-sm font-medium ${textMain}`}>
                  {paymentMethod}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {/* Manage subscription -> Stripe Portal */}
          <button
            type="button"
            onClick={() => openPortal("manage")}
            disabled={loadingPortal}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              darkMode
                ? "bg-gray-900/40 border-purple-400 text-purple-200 hover:bg-gray-900/70"
                : "bg-white/80 border-purple-200 text-purple-700 hover:bg-white"
            } ${loadingPortal ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {t(
              "profile.subscription.manageSubscription",
              "Manage subscription"
            )}
          </button>

          {/* Unsubscribe -> Stripe Portal (direct cancel flow) */}
          <button
            type="button"
            onClick={() => openPortal("cancel")}
            disabled={loadingPortal}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              darkMode
                ? "bg-red-900/40 text-red-200 hover:bg-red-900/70"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            } ${loadingPortal ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {t("profile.subscription.unsubscribe", "Unsubscribe")}
          </button>
        </div>
      </div>
    </div>
  );
}
