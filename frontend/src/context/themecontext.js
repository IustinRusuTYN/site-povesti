// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// ✅ Creăm contextul
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Încearcă să citim tema din localStorage, default la light
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
