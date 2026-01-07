// src/context/searchcontext.js
import { createContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchStories } from "../services/storiesService";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [query, setQueryState] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  // ca să evităm race conditions când user tastează rapid
  const lastRequestId = useRef(0);

  const setQuery = (value) => {
    const searchValue = value?.toString() || "";
    setQueryState(searchValue);
  };

  useEffect(() => {
    const searchValue = query?.toString() || "";

    if (!searchValue.trim()) {
      setSuggestions([]);
      setLoadingSuggestions(false);
      return;
    }

    // Debounce
    const timeoutId = setTimeout(async () => {
      const requestId = ++lastRequestId.current;
      setLoadingSuggestions(true);

      const { data, error } = await searchStories(searchValue, i18n.language);

      // dacă între timp a pornit alt request, ignorăm rezultatul vechi
      if (requestId !== lastRequestId.current) return;

      if (error) {
        console.error("Search suggestions error:", error);
        setSuggestions([]);
      } else {
        // data vine deja mapată de storiesService: title/excerpt/category/image etc
        setSuggestions(data || []);
      }

      setLoadingSuggestions(false);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [query, i18n.language]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        suggestions,
        loadingSuggestions, // opțional: dacă vrei spinner în UI
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
