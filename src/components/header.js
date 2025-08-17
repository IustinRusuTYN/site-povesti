import React, { useState, useContext } from "react";
import logo from "../assets/logo/bnk.svg";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = ["/allstories", "/about", "/upcoming", "/subscribe"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ro");
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const renderLinks = (isMobile = false) =>
    navLinks.map((path, i) => {
      const name = path.slice(1).replace(/^\w/, (c) => c.toUpperCase());
      const classes = isMobile
        ? "block hover:text-blue-500 transition-colors duration-300"
        : `hover:text-blue-500 transition ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`;

      return (
        <Link
          key={i}
          to={path}
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
          className={classes}
        >
          {name === "Allstories" ? "All Stories" : name}
        </Link>
      );
    });

  const renderAuth = (isMobile = false) => (
    <>
      <a
        href="https://cartigratis.com/"
        className={
          isMobile
            ? "block font-semibold"
            : `font-semibold hover:underline ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`
        }
      >
        Sign In
      </a>
      <a
        href="https://cartigratis.com/"
        className={
          isMobile
            ? "block mt-1 px-3 py-1 rounded-md text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            : "ml-2 px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
        }
      >
        Sign Up
      </a>
    </>
  );

  const renderSearch = (isMobile = false) => (
    <input
      type="search"
      placeholder="Search..."
      className={`${
        isMobile ? "w-full" : "px-2 py-1"
      } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-gray-100 text-gray-900 border-gray-300"
      }`}
    />
  );

  const renderLanguageSelect = (isMobile = false) => (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className={`${
        isMobile ? "w-full" : "ml-4"
      } border rounded-md px-2 py-1 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white border-gray-600" : ""
      }`}
    >
      <option value="ro">RO</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );

  const renderThemeToggle = (isMobile = false) => (
    <button
      onClick={toggleTheme}
      className={`${
        isMobile ? "w-full text-center" : "ml-4"
      } p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="text-yellow-400 inline" /> : <Moon />}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-indigo-800 text-white" : "bg-indigo-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">StoryTeller</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {renderLinks()}
            {renderSearch()}
            {renderAuth()}
            {renderLanguageSelect()}
            {renderThemeToggle()}
          </nav>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 border-t px-4 ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-900 border-gray-200"
        }`}
        style={{ maxHeight: menuOpen ? "500px" : "0px" }}
      >
        <div className="space-y-3 py-3">
          {renderLinks(true)}
          {renderSearch(true)}
          {renderAuth(true)}
          {renderLanguageSelect(true)}
          {renderThemeToggle(true)}
        </div>
      </nav>
    </header>
  );
}
