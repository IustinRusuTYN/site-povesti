// src/components/header/languageSelect.js
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe2, ChevronDown } from "lucide-react";

export default function LanguageSelect({ isMobile = false }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: "ro", label: "Română", flag: "https://flagcdn.com/w20/ro.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w20/fr.png" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {/* Buton principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-sm"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="w-5 h-4 rounded-sm"
        />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLang.label}
        </span>
        <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
      </button>

      {/* Dropdown limbi */}
      {open && (
        <div
          className={`absolute z-50 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
            isMobile
              ? "w-28 right-0 bottom-[-12px] flex flex-col gap-1 p-1" // mai jos, mai compact
              : "mt-1 right-0 w-36 flex flex-col gap-1"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-2 w-full px-2 py-1 text-left text-sm transition-colors rounded-md ${
                i18n.language === lang.code
                  ? "bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-4 h-3 rounded-sm"
              />
              <span className="text-xs">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
