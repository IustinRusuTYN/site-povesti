import React from "react";
import Button from "../buttons/Button";
import PriceDisplay from "./priceDisplay";
import { useTranslation } from "react-i18next";

export default function PlanCard({ plan, billing, darkMode, onSubscribe }) {
  const { t } = useTranslation();

  return (
    <article
      className={`relative p-8 rounded-2xl shadow-lg border transition transform hover:-translate-y-2 ${
        darkMode
          ? plan.recommended
            ? "bg-gradient-to-br from-indigo-700 to-indigo-600 text-white border-indigo-500"
            : "bg-gray-800 text-gray-100 border-gray-700"
          : plan.recommended
          ? "bg-white border-indigo-400 ring-1 ring-indigo-100"
          : "bg-white border-gray-200"
      }`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow">
          {t("subscribePage.planCard.recommended")}
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="mb-6 text-sm text-gray-400 dark:text-gray-200">
        {plan.description}
      </p>

      <div className="mb-6">
        <PriceDisplay plan={plan} billing={billing} />
      </div>

      <ul className="mb-6 space-y-2 text-left">
        {Array.isArray(plan.highlights) &&
          plan.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-green-600 dark:text-green-400">✔</span>
              <span className="text-sm text-gray-400 dark:text-gray-200">
                {h}
              </span>
            </li>
          ))}
      </ul>

      <Button
        variant={plan.recommended ? "secondary" : "primary"}
        onClick={() => onSubscribe(plan.id)}
        className={`w-full py-3 font-semibold ${
          plan.recommended ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""
        }`}
      >
        {plan.recommended
          ? t("subscribePage.planCard.goPremium")
          : t("subscribePage.planCard.chooseBasic")}
      </Button>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        {t("subscribePage.planCard.disclaimer")}
      </p>
    </article>
  );
}
