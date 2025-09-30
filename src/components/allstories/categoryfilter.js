import React from "react";

export default function CategoryFilter({
  categories,
  categoryFilter,
  setCategoryFilter,
  darkMode,
}) {
  return (
    <div className="flex justify-center mb-8">
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-100"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "Toate" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}
