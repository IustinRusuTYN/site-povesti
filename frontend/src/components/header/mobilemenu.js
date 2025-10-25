// src/components/header/mobilemenu.js
import React, { useRef, useEffect, useState } from "react";
import NavLinks from "./navlinks";
import SearchBar from "./searchbar";
import AuthMenu from "./authmenu";
import LanguageSelect from "./languageSelect";
import ThemeToggle from "./themeToggle";

export default function MobileMenu({
  isOpen,
  darkMode,
  showModal,
  setShowModal,
}) {
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Setăm înălțimea reală când se deschide
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        setMaxHeight(menuRef.current.scrollHeight + "px");
      } else {
        setMaxHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      className={`md:hidden overflow-hidden transition-all duration-300 border-t px-4 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }`}
      style={{ maxHeight }}
    >
      <div className="space-y-3 py-3">
        <NavLinks isMobile={true} />
        <SearchBar isMobile={true} />
        <AuthMenu
          isMobile={true}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <LanguageSelect isMobile={true} />
        <ThemeToggle isMobile={true} />
      </div>
    </nav>
  );
}
