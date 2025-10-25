// src/components/header/navlinks.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinks = ["/allstories", "/about", "/upcoming", "/subscribe"];

export default function NavLinks({ darkMode, isMobile = false }) {
  const { t } = useTranslation();

  return navLinks.map((path, i) => {
    let nameKey = path.slice(1); // extrage cheia fără "/"
    if (nameKey === "allstories") nameKey = "allStories"; // mapare specială

    return (
      <Link
        key={i}
        to={path}
        className={
          isMobile
            ? "block hover:text-blue-500 transition-colors"
            : `hover:text-blue-500 transition ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`
        }
      >
        {t(nameKey)}
      </Link>
    );
  });
}
