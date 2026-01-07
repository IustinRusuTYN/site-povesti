// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ro from "./locales/ro/translation";
import en from "./locales/en/translation";
import fr from "./locales/fr/translation";

const resources = { ro, en, fr };

i18n.use(initReactI18next).init({
  resources,
  lng: "ro",
  fallbackLng: "ro",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
