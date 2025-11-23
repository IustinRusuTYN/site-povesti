// src/components/profile/profilesubscription.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProfileSubscription({ darkMode }) {
  const { t, i18n } = useTranslation();

  // În viitor poți înlocui cu date reale din backend / context
  const currentPlan = {
    name: "Premium",
    price: "49.99",
    renewDate: "2024-12-31",
    status: "active", // "active", "canceled", etc.
    paymentMethod: t("profile.subscription.paymentValue"), // ex: "Card bancar" / "Credit card"
  };

  const handleUnsubscribe = () => {
    // Aici vei apela API în varianta reală
    alert(t("profile.subscription.alertUnsubscribed"));
  };

  const cardBg = darkMode
    ? "bg-gradient-to-r from-purple-900/40 to-pink-900/30"
    : "bg-gradient-to-r from-purple-50 to-pink-50";

  const textMain = darkMode ? "text-white" : "text-gray-900";
  const textMuted = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div className="space-y-6">
      {/* Card principal abonament */}
      <div className={`p-6 rounded-xl shadow-lg ${cardBg}`}>
        {/* Titlu + plan */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Stânga: nume plan + preț */}
          <div>
            <p className={`text-sm ${textMuted} mb-1`}>
              {t("profile.subscription.currentPlan")}
            </p>
            <h2 className={`text-2xl font-bold ${textMain}`}>
              {currentPlan.name}
            </h2>

            <div className="mt-3">
              <p className={`text-sm ${textMuted}`}>
                {t("profile.subscription.price")}
              </p>
              <p className={`text-xl font-semibold ${textMain}`}>
                {currentPlan.price} RON / {t("profile.subscription.year")}
              </p>
            </div>
          </div>

          {/* Dreapta: status + reînnoire + metodă de plată */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-sm ${textMuted}`}>
                {t("profile.subscription.statusLabel")}:
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                {t("profile.subscription.statusActive")}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div>
                <p className={`text-xs ${textMuted}`}>
                  {t("profile.subscription.renewDate")}
                </p>
                <p className={`text-sm font-medium ${textMain}`}>
                  {new Date(currentPlan.renewDate).toLocaleDateString(
                    i18n.language
                  )}
                </p>
              </div>

              <div>
                <p className={`text-xs ${textMuted}`}>
                  {t("profile.subscription.paymentMethod")}
                </p>
                <p className={`text-sm font-medium ${textMain}`}>
                  {currentPlan.paymentMethod}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Butoane acțiuni */}
        <div className="mt-5 flex flex-wrap gap-3">
          {/* Buton schimbă planul -> pagina de subscribe */}
          <Link
            to="/subscribe"
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              darkMode
                ? "bg-gray-900/40 border-purple-400 text-purple-200 hover:bg-gray-900/70"
                : "bg-white/80 border-purple-200 text-purple-700 hover:bg-white"
            }`}
          >
            {t("profile.subscription.manageSubscription")}
          </Link>

          {/* Buton dezabonare (simulare) */}
          <button
            type="button"
            onClick={handleUnsubscribe}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              darkMode
                ? "bg-red-900/40 text-red-200 hover:bg-red-900/70"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            }`}
          >
            {t("profile.subscription.unsubscribe")}
          </button>
        </div>
      </div>
    </div>
  );
}
