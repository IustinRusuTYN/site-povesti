import React from "react";

export default function StoryNotFound({ onBack }) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Povestea nu a fost găsită
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Povestea pe care încerci să o accesezi nu există sau a fost ștearsă.
      </p>
      <button
        onClick={onBack}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Înapoi la toate poveștile
      </button>
    </section>
  );
}
