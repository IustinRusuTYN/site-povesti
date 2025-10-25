import React from "react";
import { useTranslation } from "react-i18next";

export default function PriceDisplay({ plan, billing }) {
  const { t } = useTranslation();

  if (billing === "monthly") {
    return (
      <span className="text-3xl font-extrabold">
        ${plan.monthly.toFixed(2)}
        {t("subscribePage.price.monthly")}
      </span>
    );
  }

  const yearly = plan.yearly;
  const monthlyEq = (yearly / 12).toFixed(2);
  const was = `$${(plan.monthly * 12).toFixed(2)}`;
  const save = Math.round(
    ((plan.monthly * 12 - yearly) / (plan.monthly * 12)) * 100
  );

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-extrabold">
        ${yearly.toFixed(2)}
        {t("subscribePage.price.yearly")}
      </span>
      <span className="text-sm text-gray-400 dark:text-gray-500">
        {t("subscribePage.price.approx")} ${monthlyEq}
        {t("subscribePage.price.monthly")}
      </span>
      <span className="text-xs mt-1 text-green-600 dark:text-green-400 font-semibold">
        {t("subscribePage.price.save")} {save}%
      </span>
      <span className="text-xs line-through text-gray-400 mt-1">{was}</span>
    </div>
  );
}
