// src/components/profile/profilesettings.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProfileSettings({ darkMode }) {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    language: i18n.language,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSettings((prev) => ({ ...prev, language: lang }));
  };

  return (
    <div className="space-y-6">
      {/* Notificări */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.settings.notifications")}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {t("profile.settings.emailNotif")}
            </span>
            <button
              onClick={() => handleToggle("emailNotifications")}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.emailNotifications
                  ? "bg-purple-500"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.emailNotifications ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {t("profile.settings.pushNotif")}
            </span>
            <button
              onClick={() => handleToggle("pushNotifications")}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.pushNotifications
                  ? "bg-purple-500"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.pushNotifications ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Limbă */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.settings.language")}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { code: "ro", label: "Română", flag: "🇷🇴" },
            { code: "en", label: "English", flag: "🇬🇧" },
            { code: "fr", label: "Français", flag: "🇫🇷" },
          ].map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`p-3 rounded-lg font-medium transition-all ${
                settings.language === lang.code
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div className="text-2xl mb-1">{lang.flag}</div>
              <div className="text-sm">{lang.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Acțiuni Periculoase */}
      <div
        className={`p-6 rounded-xl ${darkMode ? "bg-red-900/20" : "bg-red-50"}`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-red-400" : "text-red-600"
          }`}
        >
          {t("profile.settings.dangerZone")}
        </h3>
        <button
          onClick={() => {
            if (window.confirm(t("profile.settings.confirmDelete"))) {
              console.log("Ștergere cont");
            }
          }}
          className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          {t("profile.settings.deleteAccount")}
        </button>
      </div>
    </div>
  );
}
