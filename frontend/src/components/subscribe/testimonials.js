import React from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials({ darkMode }) {
  const { t } = useTranslation();

  // Preluăm titlul și items pentru limba curentă
  const testimonialsData = t("subscribePage.testimonials", {
    returnObjects: true,
  });

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {testimonialsData.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {Array.isArray(testimonialsData.items) &&
          testimonialsData.items.map((tItem) => (
            <figure
              key={tItem.id}
              className={`p-6 rounded-xl shadow-md border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-gray-100"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <blockquote className="text-sm mb-4">“{tItem.text}”</blockquote>
              <figcaption className="text-xs font-semibold">
                {tItem.name}
              </figcaption>
              <div className="text-xs text-gray-500">{tItem.role}</div>
            </figure>
          ))}
      </div>
    </section>
  );
}
