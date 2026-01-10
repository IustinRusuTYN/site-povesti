// src/components/profile/profilesettings.js
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";

export default function ProfileSettings({ darkMode, userProfile }) {
  const { t, i18n } = useTranslation();
  const { updateProfile } = useAuth();

  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    emailNotifications: userProfile?.email_notifications ?? true,
    pushNotifications: userProfile?.push_notifications ?? false,
    language: userProfile?.preferred_language ?? i18n.language,
  });

  // când userProfile se schimbă (load din DB), sincronizăm UI
  useEffect(() => {
    setSettings({
      emailNotifications: userProfile?.email_notifications ?? true,
      pushNotifications: userProfile?.push_notifications ?? false,
      language: userProfile?.preferred_language ?? i18n.language,
    });

    // aplică limba salvată în profil (după refresh)
    const preferred = userProfile?.preferred_language;
    if (preferred && preferred !== i18n.language) {
      i18n.changeLanguage(preferred);
    }
  }, [userProfile, i18n]);

  const persist = async (patch) => {
    setSaving(true);
    try {
      const { error, data } = await updateProfile(patch);
      if (error) {
        console.error(error);
        alert(error.message || "Failed to save settings");
        return false;
      }

      // ajută i18next să țină limba și la refresh (majoritatea setup-urilor citesc i18nextLng)
      if (data?.preferred_language) {
        try {
          localStorage.setItem("i18nextLng", data.preferred_language);
        } catch {}
      }

      return true;
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (key) => {
    const prev = settings[key];
    const next = !prev;

    // update optimist UI
    setSettings((p) => ({ ...p, [key]: next }));

    // mapare către coloanele din profiles
    const patch =
      key === "emailNotifications"
        ? { email_notifications: next }
        : { push_notifications: next };

    const ok = await persist(patch);

    // dacă a eșuat salvarea, revenim
    if (!ok) setSettings((p) => ({ ...p, [key]: prev }));
  };

  const handleLanguageChange = async (lang) => {
    const prev = settings.language;

    // schimbă limba imediat în UI
    await i18n.changeLanguage(lang);
    setSettings((p) => ({ ...p, language: lang }));

    // salvează în DB
    const ok = await persist({ preferred_language: lang });
    if (!ok) {
      // revert dacă vrei strict
      await i18n.changeLanguage(prev);
      setSettings((p) => ({ ...p, language: prev }));
    }
  };

  const languages = [
    {
      code: "ro",
      label: t("profile.settings.languages.ro", "Română"),
      flag: "🇷🇴",
    },
    {
      code: "en",
      label: t("profile.settings.languages.en", "English"),
      flag: "🇬🇧",
    },
    {
      code: "fr",
      label: t("profile.settings.languages.fr", "Français"),
      flag: "🇫🇷",
    },
  ];

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
              disabled={saving}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.emailNotifications
                  ? "bg-purple-500"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              } ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
              aria-label={t(
                "profile.settings.toggleEmail",
                "Toggle email notifications"
              )}
              type="button"
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
              disabled={saving}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.pushNotifications
                  ? "bg-purple-500"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              } ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
              aria-label={t(
                "profile.settings.togglePush",
                "Toggle push notifications"
              )}
              type="button"
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
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={saving}
              className={`p-3 rounded-lg font-medium transition-all ${
                settings.language === lang.code
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
              type="button"
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
              console.log(
                t(
                  "profile.settings.deleteNotImplemented",
                  "Delete not implemented"
                )
              );
            }
          }}
          className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          type="button"
        >
          {t("profile.settings.deleteAccount")}
        </button>
      </div>
    </div>
  );
}
