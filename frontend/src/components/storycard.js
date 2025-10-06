import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

export default function StoryCard({ title, excerpt, image }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[300px] rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-md mb-3 flex-shrink-0"
        />
      )}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p
        className={`text-sm line-clamp-3 overflow-hidden flex-grow ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {excerpt}
      </p>
    </div>
  );
}
