import React from "react";
import { useTranslation } from "react-i18next";

export default function TrustSection({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section
      className={`p-6 rounded-xl ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">
            {t("subscribePage.trust.safePayments.title")}
          </h4>
          <p className="text-sm">
            {t("subscribePage.trust.safePayments.description")}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            {t("subscribePage.trust.cancelAnytime.title")}
          </h4>
          <p className="text-sm">
            {t("subscribePage.trust.cancelAnytime.description")}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            {t("subscribePage.trust.supportRefund.title")}
          </h4>
          <p className="text-sm">
            {t("subscribePage.trust.supportRefund.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
