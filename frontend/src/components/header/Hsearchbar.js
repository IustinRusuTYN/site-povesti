// src/components/header/Hsearchbar.js
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchcontext";
import { useTranslation } from "react-i18next";
import { getStoryText } from "../../utils/storyHelpers";
import stories from "../../data/stories";
import { ThemeContext } from "../../context/themecontext";

export default function HsearchBar({ isMobile = false }) {
  const { query, setQuery } = useContext(SearchContext);
  const { i18n, t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Istoric căutări
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions(
        isFocused ? recentSearches.map((s) => ({ title: s })) : []
      );
      return;
    }

    const lang = i18n.language || "ro";

    const filtered = stories
      .filter(Boolean)
      .filter((story) => {
        if (!story || !story.translations) return false;

        const { title, excerpt } = getStoryText(story, lang);
        const safeTitle = (title || "").toLowerCase();
        const safeExcerpt = (excerpt || "").toLowerCase();
        const safeValue = value.toLowerCase();

        return safeTitle.includes(safeValue) || safeExcerpt.includes(safeValue);
      })
      .map((story) => {
        const { title } = getStoryText(story, lang);
        return { title };
      });

    setSuggestions(filtered);
  };

  const handleSelectSuggestion = (title) => {
    if (!title || !title.trim()) return;

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

  // Fundal alb + text închis → întotdeauna vizibil
  const inputClasses = [
    "w-full",
    "px-3",
    isMobile ? "py-2" : "py-1.5",
    "rounded-md",
    "border",
    "text-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-indigo-300",
    "transition-colors",
    "bg-white text-gray-900 placeholder-gray-500 border-indigo-300",
  ].join(" ");

  const listClasses = [
    "absolute left-0 right-0 mt-1 rounded-md shadow-lg z-50 overflow-hidden border",
    darkMode
      ? "bg-gray-900 text-gray-100 border-gray-700"
      : "bg-white text-gray-900 border-gray-200",
  ].join(" ");

  const itemClasses = [
    "px-4 py-2 cursor-pointer transition-colors",
    darkMode ? "hover:bg-gray-800" : "hover:bg-indigo-50",
  ].join(" ");

  return (
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
        placeholder={t("search.placeholder") || "Caută o poveste..."}
        className={inputClasses}
      />

      {isFocused && suggestions.length > 0 && (
        <ul className={listClasses}>
          {suggestions.map((s, i) => (
            <li
              key={i}
              onMouseDown={(ev) => ev.preventDefault()}
              onClick={() => handleSelectSuggestion(s.title)}
              className={itemClasses}
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
