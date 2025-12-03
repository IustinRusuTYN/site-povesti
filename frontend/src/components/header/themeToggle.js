// src/components/header/themeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isMobile = false }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isMobile ? "w-full flex justify-center" : ""}>
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={`
          relative inline-flex items-center h-8 w-14 rounded-full border 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
          ${
            darkMode
              ? "bg-gray-900 border-gray-600"
              : "bg-white/90 border-indigo-200 shadow-sm"
          }
        `}
      >
        {/* Slider */}
        <span
          className={`
            absolute inset-y-1 left-1 w-6 rounded-full bg-indigo-500 shadow-md 
            transform transition-transform duration-300
            ${darkMode ? "translate-x-6" : "translate-x-0"}
          `}
        />

        {/* Iconițe */}
        <div className="flex items-center justify-between w-full px-1 text-xs">
          <Moon
            className={`w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-indigo-700"
            }`}
          />
          <Sun
            className={`w-4 h-4 ${
              darkMode ? "text-yellow-300" : "text-gray-400"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
