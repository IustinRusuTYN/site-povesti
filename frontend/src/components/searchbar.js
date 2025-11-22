// src/components/SearchBar.js
import React, { useContext } from "react";
import { SearchContext } from "../context/searchcontext";

export default function SearchBar() {
  const { query, setQuery, suggestions } = useContext(SearchContext);

  return (
    <div className="mb-8 flex flex-col items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Caută o poveste..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {suggestions.length > 0 && (
        <div className="w-full max-w-md mt-2 bg-white shadow-md rounded-lg p-2">
          {suggestions.map((story) => (
            <div
              key={story.id}
              className="p-1 text-sm cursor-pointer hover:bg-gray-200"
            >
              {story.translations?.[story.defaultLanguage || "ro"]?.title ||
                "Fără titlu"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
