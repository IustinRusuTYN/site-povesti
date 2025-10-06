import React from "react";

export default function billingToggle({ billing, setBilling, darkMode }) {
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
          {type === "monthly" ? "Lunar" : "Anual (reducere)"}
        </button>
      ))}
    </div>
  );
}
