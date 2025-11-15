// src/components/profile/profilesubscription.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProfileSubscription({ darkMode }) {
  const { t } = useTranslation();

  const handleUnsubscribe = () => {
    alert(t("profile.subscription.alertUnsubscribed"));
  };

  return (
    <div className="space-y-4 max-w-md">
      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>{t("profile.subscription.statusLabel")}:</strong>{" "}
        {t("profile.subscription.statusActive")}
      </p>

      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>{t("profile.subscription.paymentMethod")}:</strong>{" "}
        {t("profile.subscription.paymentValue")}
      </p>

      <button
        onClick={handleUnsubscribe}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        {t("profile.subscription.unsubscribe")}
      </button>
    </div>
  );
}
