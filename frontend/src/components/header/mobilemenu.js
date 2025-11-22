import React, { useRef, useEffect, useState } from "react";
import NavLinks from "./navlinks";
import SearchBar from "./Hsearchbar";
import AuthMenu from "./authmenu";
import LanguageSelect from "./languageSelect";
import ThemeToggle from "./themeToggle";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  darkMode,
  showModal,
  setShowModal,
}) {
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Ajustăm înălțimea meniului
  useEffect(() => {
    if (menuRef.current) {
      setMaxHeight(isOpen ? menuRef.current.scrollHeight + "px" : "0px");
    }
  }, [isOpen]);

  // Închidem meniul la click în afara lui
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("button[aria-label='Toggle menu']")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

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
