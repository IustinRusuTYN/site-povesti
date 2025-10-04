// src/components/header/header.js
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/bnk.svg";

import NavLinks from "./navlinks";
import SearchBar from "./searchbar";
import AuthMenu from "./authmenu";
import LanguageSelect from "./languageSelect";
import ThemeToggle from "./themeToggle";
import MobileMenu from "./mobilemenu";
import ModalContainer from "./modalcontainer";

import { ThemeContext } from "../../context/themecontext";
import { SearchContext } from "../../context/searchcontext";

export default function Header() {
  const { darkMode } = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const { query, setQuery } = useContext(SearchContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const emailRef = useRef(null);

  // Reset search dacă nu suntem pe /allstories
  useEffect(() => {
    if (location.pathname !== "/allstories") setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLinks darkMode={darkMode} />
            <SearchBar isMobile={false} />
            <AuthMenu
              isMobile={false}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <LanguageSelect isMobile={false} />
            <ThemeToggle isMobile={false} />
          </nav>

          {/* Mobile menu toggle */}
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

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={menuOpen}
        darkMode={darkMode}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Modals Component */}
      <ModalContainer
        showModal={showModal}
        setShowModal={setShowModal}
        darkMode={darkMode}
        emailRef={emailRef}
      />
    </header>
  );
}
