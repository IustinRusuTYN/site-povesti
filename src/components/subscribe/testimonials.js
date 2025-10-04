import React from "react";

export default function testimonials({ testimonials, darkMode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Ce spun cititoarele
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className={`p-6 rounded-xl shadow-md border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-900"
            }`}
          >
            <blockquote className="text-sm mb-4">“{t.text}”</blockquote>
            <figcaption className="text-xs font-semibold">{t.name}</figcaption>
            <div className="text-xs text-gray-500">{t.role}</div>
          </figure>
        ))}
      </div>
    </section>
  );
}
