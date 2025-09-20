// src/components/header.js
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/bnk.svg";
import stories from "../data/stories";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import { AuthContext } from "../context/authcontext";
import { Moon, Sun } from "lucide-react";
import SignInForm from "./signinform";
import SignUpForm from "./signupform";

const navLinks = ["/allstories", "/about", "/upcoming", "/subscribe"];

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { query, setQuery } = useContext(SearchContext);
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ro");
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showModal, setShowModal] = useState(null); // "signin" | "signup" | null

  const navigate = useNavigate();
  const emailRef = useRef(null);

  // --- Recent searches din localStorage ---
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  // --- Autofocus pe email când se deschide modalul ---
  useEffect(() => {
    if (showModal && emailRef.current) {
      setTimeout(() => emailRef.current.focus(), 50);
    }
  }, [showModal]);

  // --- Închide modal la Esc ---
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(null);
    };
    if (showModal) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showModal]);

  // ------------ Search Handlers ------------
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions(
        isFocused ? recentSearches.map((s) => ({ title: s })) : []
      );
      return;
    }

    const filtered = stories.filter(
      (story) =>
        story.title.toLowerCase().includes(value.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelectSuggestion = (title) => {
    const updatedHistory = [
      title,
      ...recentSearches.filter((s) => s !== title),
    ].slice(0, 5);
    setRecentSearches(updatedHistory);
    localStorage.setItem("recentSearches", JSON.stringify(updatedHistory));
    setQuery(title);
    navigate("/allstories");
    setSuggestions([]);
  };

  // ------------ Render Helpers ------------
  const renderLinks = (isMobile = false) =>
    navLinks.map((path, i) => {
      const name = path.slice(1).replace(/^\w/, (c) => c.toUpperCase());
      return (
        <Link
          key={i}
          to={path}
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
          className={
            isMobile
              ? "block hover:text-blue-500 transition-colors"
              : `hover:text-blue-500 transition ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`
          }
        >
          {name === "Allstories" ? "All Stories" : name}
        </Link>
      );
    });

  const renderSearch = (isMobile = false) => (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={handleSearchChange}
        onFocus={() => {
          setIsFocused(true);
          if (!query) setSuggestions(recentSearches.map((s) => ({ title: s })));
        }}
        onBlur={() =>
          setTimeout(() => {
            setIsFocused(false);
            setSuggestions([]);
          }, 120)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSelectSuggestion(query);
        }}
        placeholder="Search..."
        className={`${
          isMobile ? "w-full" : "px-2 py-1"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors border ${
          darkMode
            ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400"
            : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"
        }`}
        aria-label="Search stories"
      />
      {isFocused && suggestions.length > 0 && (
        <ul
          className={`absolute left-0 right-0 mt-1 rounded-md shadow-lg z-50 overflow-hidden border ${
            darkMode
              ? "border-gray-700 bg-gray-900 text-gray-100"
              : "border-gray-300 bg-white text-gray-900"
          }`}
        >
          {suggestions.map((s, i) => (
            <li
              key={i}
              onMouseDown={(ev) => ev.preventDefault()}
              onClick={() => handleSelectSuggestion(s.title)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderAuth = (isMobile = false) => {
    if (user) {
      return (
        <div className={isMobile ? "block" : "flex items-center space-x-3"}>
          <Link
            to="/profile"
            className={`font-semibold hover:underline ${
              darkMode ? "text-blue-300" : "text-blue-700"
            }`}
          >
            Salut, {user.name}
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className={
              isMobile
                ? "block mt-2 w-full px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
                : "px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
            }
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <>
        <button
          onClick={() => setShowModal("signin")}
          className={
            isMobile
              ? "block font-semibold"
              : `font-semibold hover:underline ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`
          }
        >
          Sign In
        </button>
        <button
          onClick={() => setShowModal("signup")}
          className={
            isMobile
              ? "block mt-1 px-3 py-1 rounded-md text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              : "ml-2 px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
          }
        >
          Sign Up
        </button>
      </>
    );
  };

  const renderLanguageSelect = (isMobile = false) => (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className={`${
        isMobile ? "w-full" : "ml-4"
      } border rounded-md px-2 py-1 transition-colors ${
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
      } p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
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
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">StoryTeller</span>
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            {renderLinks()}
            {renderSearch()}
            {renderAuth()}
            {renderLanguageSelect()}
            {renderThemeToggle()}
          </nav>

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

      {/* Mobile menu */}
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

      {/* Modals */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(null)}
        >
          <div
            className={`relative z-10 w-full max-w-md p-6 rounded-lg shadow-lg ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {showModal === "signin" && (
              <SignInForm
                onClose={() => setShowModal(null)}
                emailRef={emailRef}
              />
            )}
            {showModal === "signup" && (
              <SignUpForm onClose={() => setShowModal(null)} />
            )}
          </div>
        </div>
      )}
    </header>
  );
}
