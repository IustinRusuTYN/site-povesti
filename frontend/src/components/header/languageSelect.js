// src/components/header/languageSelect.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect({ isMobile = false, darkMode }) {
  const { i18n } = useTranslation();

  const languages = [
    { code: "ro", label: "Română", short: "RO", flag: "🇷🇴" },
    { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
    { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div
      className={`
        inline-flex items-center 
        ${isMobile ? "w-full justify-center" : ""}
        px-1 py-1 rounded-full
        border
        ${
          darkMode
            ? "border-gray-700 bg-gray-900/60"
            : "border-white/40 bg-white/10"
        }
        backdrop-blur-sm
        shadow-md
        gap-1
      `}
    >
      {languages.map((lang) => {
        const isActive = i18n.language === lang.code;

        return (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              flex items-center justify-center
              rounded-full px-2 py-1
              text-xs font-semibold
              whitespace-nowrap
              transition-all duration-200
              ${
                isActive
                  ? darkMode
                    ? "bg-white text-indigo-700 shadow"
                    : "bg-white text-indigo-700 shadow"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-white hover:bg-white/20"
              }
            `}
            aria-label={lang.label}
          >
            {/* Pe desktop, păstrăm totul foarte compact */}
            {!isMobile && <span className="text-[11px]">{lang.short}</span>}

            {/* Pe mobil, arătăm și flag + abreviere */}
            {isMobile && (
              <>
                <span className="mr-1 text-sm">{lang.flag}</span>
                <span className="text-[11px]">{lang.short}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
