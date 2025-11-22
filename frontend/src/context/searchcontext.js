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

      // asigurăm 100% că este string valid
      const safeTitle = typeof title === "string" ? title : "";
      const safeExcerpt = typeof excerpt === "string" ? excerpt : "";
      const safeQuery = typeof searchValue === "string" ? searchValue : "";

      // dacă toate sunt goale, nu are sens să fie inclus
      if (!safeTitle && !safeExcerpt) return false;

      // DEBUG
      console.log("DEBUG SearchContext:", {
        storyId: story.id,
        safeTitle,
        safeExcerpt,
        safeQuery,
      });

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
