// src/components/header/navlinks.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinks = [
  { path: "/allstories", key: "allStories" },
  { path: "/about", key: "about" },
  { path: "/upcoming", key: "upcoming" },
  { path: "/subscribe", key: "subscribe" },
];

export default function NavLinks({ darkMode, isMobile = false }) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {navLinks.map(({ path, key }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            key={path}
            to={path}
            className={`
              font-semibold transition-colors whitespace-nowrap
              ${
                isMobile
                  ? `block py-2 ${
                      isActive
                        ? "text-indigo-500"
                        : darkMode
                        ? "text-gray-200 hover:text-indigo-300"
                        : "text-gray-800 hover:text-indigo-700"
                    }`
                  : `${
                      darkMode
                        ? "text-white hover:text-indigo-200"
                        : "text-gray-900 hover:text-indigo-800"
                    } ${isActive ? "underline underline-offset-4" : ""}`
              }
            `}
          >
            {t(key)}
          </Link>
        );
      })}
    </>
  );
}
