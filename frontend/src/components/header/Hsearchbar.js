// src/components/header/HsearchBar.js
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchcontext";
import { useTranslation } from "react-i18next";
import { getStoryText } from "../../utils/storyHelpers";
import stories from "../../data/stories";

export default function HsearchBar({ isMobile = false }) {
  const { query, setQuery } = useContext(SearchContext);
  const { i18n } = useTranslation();
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Încarcă istoricul căutărilor
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

    // Filtrare corectă folosind getStoryText
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
        return { title }; // doar titlu pentru sugestii
      });

    setSuggestions(filtered);
  };

  const handleSelectSuggestion = (title) => {
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
        placeholder="Caută o poveste..."
        className={`${
          isMobile ? "w-full" : "px-2 py-1"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors border bg-gray-100 text-gray-900 placeholder-gray-500`}
      />

      {isFocused && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 rounded-md shadow-lg z-50 overflow-hidden border bg-white text-gray-900">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onMouseDown={(ev) => ev.preventDefault()}
              onClick={() => handleSelectSuggestion(s.title)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors"
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
