import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/v-logo4.1rb.svg";
import { ThemeContext } from "../context/themecontext";
import { Sun, Moon } from "lucide-react";

export default function AuthHeader() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-indigo-800 text-white" : "bg-indigo-200 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">StoryTeller</span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Buton Home */}
            <button
              onClick={() => navigate("/")}
              className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Acasă
            </button>

            {/* Toggle Dark/Light */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="text-yellow-400 inline" /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
