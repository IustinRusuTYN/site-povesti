import { createContext, useState } from "react";
import stories from "../data/stories";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const updateQuery = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(
        stories.filter((story) =>
          story.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <SearchContext.Provider
      value={{ query, setQuery: updateQuery, suggestions }}
    >
      {children}
    </SearchContext.Provider>
  );
};
