import React from "react";
import { useTranslation } from "react-i18next";

export default function BillingToggle({ billing, setBilling, darkMode }) {
  const { t } = useTranslation();

  return (
    <div
      className={`inline-flex items-center rounded-full mt-6 p-1 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      {["monthly", "yearly"].map((type) => (
        <button
          key={type}
          onClick={() => setBilling(type)}
          className={`px-4 py-2 rounded-full transition ${
            billing === type
              ? darkMode
                ? "bg-gray-900 text-white shadow"
                : "bg-white text-gray-900 shadow"
              : "text-gray-400 dark:text-gray-300"
          }`}
        >
          {t(`subscribePage.billing.${type}`)}
        </button>
      ))}
    </div>
  );
}
