import React, { useState, useContext } from "react";
import logo from "../assets/logo/bnk.svg";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ro");
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`shadow-md sticky top-0 z-50 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo și titlu */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span
              className={`font-bold text-xl ${
                darkMode ? "text-white" : "text-blue-700"
              }`}
            >
              StoryTeller
            </span>
          </div>

          {/* Meniu desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/allstories"
              className={`hover:text-blue-600 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              All Stories
            </Link>
            <a
              href="https://cartigratis.com/"
              className={`hover:text-blue-600 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              About Us
            </a>
            <a
              href="https://cartigratis.com/"
              className={`hover:text-blue-600 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Upcoming
            </a>
            <a
              href="https://cartigratis.com/"
              className={`hover:text-blue-600 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Subscribe
            </a>

            <input
              type="search"
              placeholder="Search..."
              className={`px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                darkMode ? "bg-gray-800 text-white border-gray-700" : ""
              }`}
            />

            {/* Sign in / up */}
            <a
              href="https://cartigratis.com/"
              className={`font-semibold hover:underline ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Sign In
            </a>
            <a
              href="https://cartigratis.com/"
              className={`ml-2 px-3 py-1 rounded-md hover:bg-blue-700 ${
                darkMode ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
              }`}
            >
              Sign Up
            </a>

            {/* Language select */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`ml-4 border rounded-md px-2 py-1 ${
                darkMode ? "bg-gray-800 text-white border-gray-600" : ""
              }`}
              aria-label="Select language"
            >
              <option value="ro">RO</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>

            {/* 🌙 / ☀️ Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-800" />
              )}
            </button>
          </nav>

          {/* Buton hamburger mobil */}
          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-700"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Meniu mobil */}
      {menuOpen && (
        <nav
          className={`md:hidden px-4 pb-4 space-y-3 border-t ${
            darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white"
          }`}
        >
          <Link to="/allstories" className="block hover:text-blue-600">
            All Stories
          </Link>
          <a
            href="https://cartigratis.com/"
            className="block hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="https://cartigratis.com/"
            className="block hover:text-blue-600"
          >
            Upcoming
          </a>
          <a
            href="https://cartigratis.com/"
            className="block hover:text-blue-600"
          >
            Subscribe
          </a>
          <input
            type="search"
            placeholder="Search..."
            className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              darkMode ? "bg-gray-800 text-white border-gray-700" : ""
            }`}
          />
          <a
            href="https://cartigratis.com/"
            className="block font-semibold hover:underline"
          >
            Sign In
          </a>
          <a
            href="https://cartigratis.com/"
            className={`block mt-1 px-3 py-1 rounded-md text-center ${
              darkMode ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
            }`}
          >
            Sign Up
          </a>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`w-full border rounded-md px-2 py-1 ${
              darkMode ? "bg-gray-800 text-white border-gray-600" : ""
            }`}
            aria-label="Select language"
          >
            <option value="ro">RO</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          {/* 🌙 / ☀️ Toggle mobil */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-800" />
            )}
          </button>
        </nav>
      )}
    </header>
  );
}
