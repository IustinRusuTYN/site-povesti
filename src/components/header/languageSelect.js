// src/components/header/languageSelect.js
import React, { useState } from "react";

export default function LanguageSelect({ isMobile = false, darkMode = false }) {
  const [language, setLanguage] = useState("ro");

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className={`${
        isMobile ? "w-full" : "ml-4"
      } border rounded-md px-2 py-1 transition-colors ${
        darkMode
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      <option value="ro">RO</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
