// src/context/searchcontext.js
import { createContext, useState } from "react";
import stories from "../data/stories";
import { useTranslation } from "react-i18next";
import { getStoryText } from "../utils/storyHelpers";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQueryState] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { i18n } = useTranslation();

  const setQuery = (value) => {
    const searchValue = value?.toString() || "";
    setQueryState(searchValue);

    if (!searchValue.trim()) {
      setSuggestions([]);
      return;
    }

    const lang = i18n.language || "ro";

    const filtered = stories.filter((story) => {
      if (!story || !story.translations) return false;

      const { title, excerpt } = getStoryText(story, lang);

      const safeTitle = typeof title === "string" ? title : "";
      const safeExcerpt = typeof excerpt === "string" ? excerpt : "";
      const safeQuery = typeof searchValue === "string" ? searchValue : "";

      if (!safeTitle && !safeExcerpt) return false;

      return (
        safeQuery === "" ||
        safeTitle.toLowerCase().includes(safeQuery.toLowerCase()) ||
        safeExcerpt.toLowerCase().includes(safeQuery.toLowerCase())
      );
    });

    setSuggestions(filtered);
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, suggestions }}>
      {children}
    </SearchContext.Provider>
  );
};
