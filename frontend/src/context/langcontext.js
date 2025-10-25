import React, { createContext, useState } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [language, setLanguage] = useState("ro"); // default română

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // salvăm preferința
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
