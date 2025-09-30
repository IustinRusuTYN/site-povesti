// src/components/header/themeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isMobile = false }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`${
        isMobile ? "w-full text-center" : "ml-4"
      } p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="text-yellow-400 inline" /> : <Moon />}
    </button>
  );
}
