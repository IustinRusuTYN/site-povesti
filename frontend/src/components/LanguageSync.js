import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";

export default function LanguageSync() {
  const { i18n } = useTranslation();
  const { userProfile, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    const lang = userProfile?.preferred_language;
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      try {
        localStorage.setItem("i18nextLng", lang);
      } catch {}
    }
  }, [loading, userProfile?.preferred_language, i18n]);

  return null;
}
