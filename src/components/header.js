import React, { useState } from "react";
import logo from "../assets/logo/bnk.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ro");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo și titlu */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="StoryTeller Logo" className="h-8 w-8" />
            <span className="font-bold text-xl text-blue-700">StoryTeller</span>
          </div>

          {/* Meniu desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="https://www.google.com/"
              className="text-gray-700 hover:text-blue-600"
            >
              All Books
            </a>
            <a
              href="https://www.google.com/"
              className="text-gray-700 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="https://www.google.com/"
              className="text-gray-700 hover:text-blue-600"
            >
              Upcoming
            </a>
            <a
              href="https://www.google.com/"
              className="text-gray-700 hover:text-blue-600"
            >
              Subscribe
            </a>
            <input
              type="search"
              placeholder="Search..."
              className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <a
              href="https://www.google.com/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </a>
            <a
              href="https://www.google.com/"
              className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </a>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ml-4 border rounded-md px-2 py-1"
              aria-label="Select language"
            >
              <option value="ro">RO</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </nav>

          {/* Buton hamburger mobil */}
          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
        <nav className="md:hidden bg-white px-4 pb-4 space-y-3 border-t">
          <a
            href="https://www.google.com/"
            className="block text-gray-700 hover:text-blue-600"
          >
            All Books
          </a>
          <a
            href="https://www.google.com/"
            className="block text-gray-700 hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="https://www.google.com/"
            className="block text-gray-700 hover:text-blue-600"
          >
            Upcoming
          </a>
          <a
            href="https://www.google.com/"
            className="block text-gray-700 hover:text-blue-600"
          >
            Subscribe
          </a>
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a
            href="https://www.google.com/"
            className="block text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </a>
          <a
            href="https://www.google.com/"
            className="block mt-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
          >
            Sign Up
          </a>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border rounded-md px-2 py-1"
            aria-label="Select language"
          >
            <option value="ro">RO</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </nav>
      )}
    </header>
  );
}
