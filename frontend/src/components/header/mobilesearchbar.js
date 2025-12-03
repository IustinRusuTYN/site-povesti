// src/components/header/mobilesearchbar.js
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchcontext";
import { useTranslation } from "react-i18next";
import { getStoryText } from "../../utils/storyHelpers";
import stories from "../../data/stories";

export default function MobileSearchBar({ darkMode }) {
  const { query, setQuery } = useContext(SearchContext);
  const { i18n, t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions(recentSearches.map((s) => ({ title: s })));
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
        return (
          safeTitle.includes(value.toLowerCase()) ||
          safeExcerpt.includes(value.toLowerCase())
        );
      })
      .map((story) => {
        const { title } = getStoryText(story, lang);
        return { title };
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
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 rounded-lg text-white hover:bg-indigo-700 transition-colors"
          aria-label="Deschide căutare"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      ) : (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && query.trim()) {
                    handleSelectSuggestion(query);
                  }
                  if (e.key === "Escape") {
                    setIsExpanded(false);
                  }
                }}
                placeholder={t("searchPlaceholder") || "Caută..."}
                autoFocus
                className="flex-1 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => {
                  setIsExpanded(false);
                  setQuery("");
                  setSuggestions([]);
                }}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {suggestions.length > 0 && (
              <ul className="bg-gray-50 rounded-lg max-h-64 overflow-y-auto">
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelectSuggestion(s.title)}
                    className="px-4 py-3 cursor-pointer hover:bg-indigo-100 text-gray-900 transition-colors"
                  >
                    {s.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
