// src/components/header/navlinks.js
import React from "react";
import { Link } from "react-router-dom";

const navLinks = ["/allstories", "/about", "/upcoming", "/subscribe"];

export default function NavLinks({ darkMode, isMobile = false }) {
  return navLinks.map((path, i) => {
    const name = path.slice(1).replace(/^\w/, (c) => c.toUpperCase());
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
        {name === "Allstories" ? "All Stories" : name}
      </Link>
    );
  });
}
