import React, { useContext } from "react";
import { SearchContext } from "../context/searchcontext";

export default function SearchBar() {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Caută o poveste..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
