// components/PageLayout.js
import React, { useContext } from "react";
import Header from "./header/header";
import Footer from "./footer";
import { ThemeContext } from "../context/themecontext";
import LanguageSync from "./LanguageSync";

export default function PageLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <LanguageSync />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
