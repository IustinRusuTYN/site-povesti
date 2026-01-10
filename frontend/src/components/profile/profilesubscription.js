// src/components/profile/profilesubscription.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProfileSubscription({ darkMode, userProfile }) {
  const { t, i18n } = useTranslation();

  const localeMap = { ro: "ro-RO", en: "en-GB", fr: "fr-FR" };
  const locale = localeMap[i18n.language] || i18n.language || "en-GB";

  // plan real din profil (supabase)
  const planId = userProfile?.subscription_plan || "free"; // free/basic/premium
  const planLabel = t(`profile.plan.${planId}`, planId);

  // prețuri din traduceri (subscribePage.plans)
  const plans = t("subscribePage.plans", {
    returnObjects: true,
    defaultValue: [],
  });
  const planObj = Array.isArray(plans)
    ? plans.find((p) => p.id === planId)
    : null;

  const yearlyPriceNumber = planId === "free" ? 0 : planObj?.yearly ?? null;

  const yearlyPrice =
    yearlyPriceNumber === null
      ? t("common.na", "N/A")
      : new Intl.NumberFormat(locale, {
          style: "currency",
          currency: "EUR",
        }).format(yearlyPriceNumber);

  // status (dacă nu ai coloană în profiles, estimăm)
  const status =
    userProfile?.subscription_status ||
    (planId === "free" ? "inactive" : "active");

  const statusText =
    status === "active"
      ? t("profile.subscription.statusActive", "Active")
      : status === "canceled"
      ? t("profile.subscription.statusCanceled", "Canceled")
      : t("profile.subscription.statusInactive", "Inactive");

  const statusClass =
    status === "active"
      ? "bg-green-500"
      : status === "canceled"
      ? "bg-red-500"
      : "bg-gray-500";

  // renew date (dacă nu ai coloană reală încă, va fi N/A)
  const renewDateRaw =
    userProfile?.renew_date ||
    userProfile?.subscription_renew_date ||
    userProfile?.renewDate ||
    null;

  const renewDateText = renewDateRaw
    ? new Date(renewDateRaw).toLocaleDateString(locale)
    : t("common.na", "N/A");

  const paymentMethod = t("profile.subscription.paymentValue", "Credit card");

  const handleUnsubscribe = () => {
    alert(t("profile.subscription.alertUnsubscribed"));
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
          {/* Stânga */}
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
                {yearlyPrice} / {t("profile.subscription.year", "year")}
              </p>
            </div>
          </div>

          {/* Dreapta */}
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
          <Link
            to="/subscribe"
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              darkMode
                ? "bg-gray-900/40 border-purple-400 text-purple-200 hover:bg-gray-900/70"
                : "bg-white/80 border-purple-200 text-purple-700 hover:bg-white"
            }`}
          >
            {t("profile.subscription.manageSubscription", "Change plan")}
          </Link>

          <button
            type="button"
            onClick={handleUnsubscribe}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              darkMode
                ? "bg-red-900/40 text-red-200 hover:bg-red-900/70"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            }`}
          >
            {t("profile.subscription.unsubscribe", "Unsubscribe")}
          </button>
        </div>
      </div>
    </div>
  );
}
