import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search as SearchIcon } from "lucide-react";
import logo from "../../assets/logo/bnk.svg";

import NavLinks from "./navlinks";
import SearchBar from "./Hsearchbar";
import AuthMenu from "./authmenu";
import LanguageSelect from "./languageSelect";
import ThemeToggle from "./themeToggle";
import MobileMenu from "./mobilemenu";
import ModalContainer from "./modalcontainer";

import { ThemeContext } from "../../context/themecontext";
import { SearchContext } from "../../context/searchcontext";

export default function Header() {
  const { darkMode } = useContext(ThemeContext);
  const { setQuery } = useContext(SearchContext);
  const { t } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const emailRef = useRef(null);

  // Resetăm căutarea când plecăm de pe /allstories și ascundem search-ul mobil
  useEffect(() => {
    if (location.pathname !== "/allstories") {
      setQuery("");
      setShowMobileSearch(false);
    }
    // NU punem setQuery în deps, ca să evităm loop infinit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const headerBg = darkMode
    ? "bg-indigo-800 text-white"
    : "bg-indigo-200 text-gray-900";

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bara principală */}
        <div className="flex justify-between items-center py-3 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 flex-shrink-0"
            aria-label="StoryTeller - Home"
          >
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">StoryTeller</span>
          </Link>

          {/* Nav + acțiuni (desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Link-uri */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <NavLinks darkMode={darkMode} />
            </div>

            {/* Search desktop */}
            <div className="w-48 lg:w-56">
              <SearchBar isMobile={false} />
            </div>

            {/* Auth + limbă + theme */}
            <AuthMenu
              isMobile={false}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <LanguageSelect isMobile={false} />
            <ThemeToggle isMobile={false} />
          </nav>

          {/* Acțiuni (mobil): icon search + burger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Icon search care deschide/închide input-ul sub header */}
            <button
              onClick={() => setShowMobileSearch((prev) => !prev)}
              aria-label="Search"
              className="p-1.5 rounded-full hover:bg-indigo-500/60 transition-colors"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <button
              className="flex items-center focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
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

        {/* Search pe mobil – apare doar când apeși lupa */}
        {showMobileSearch && (
          <div className="md:hidden pb-3">
            <SearchBar isMobile={true} />
          </div>
        )}
      </div>

      {/* Meniu mobil */}
      <MobileMenu
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
        darkMode={darkMode}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Modale login/signup */}
      <ModalContainer
        showModal={showModal}
        setShowModal={setShowModal}
        darkMode={darkMode}
        emailRef={emailRef}
      />
    </header>
  );
}
