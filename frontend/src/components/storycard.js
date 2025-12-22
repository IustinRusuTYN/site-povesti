// src/components/storycard.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

export default function StoryCard({
  title,
  excerpt,
  image,
  variant = "featured",
}) {
  const { darkMode } = useContext(ThemeContext);

  // ========== COMPACT VARIANT (AllStories) ==========
  if (variant === "compact") {
    return (
      <div
        className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Image Container - Aspect Ratio 3:4 */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-700">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-4xl">📖</span>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={`p-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
          {/* Title - Max 2 lines */}
          <h3 className="font-bold text-sm leading-tight line-clamp-2 mb-1 group-hover:text-purple-500 transition-colors">
            {title}
          </h3>

          {/* Excerpt - Max 2 lines */}
          <p
            className={`text-xs line-clamp-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {excerpt}
          </p>
        </div>
      </div>
    );
  }

  // ========== FEATURED VARIANT (Carousel) ==========
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">📖</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-4 flex-1 flex flex-col ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {/* Excerpt */}
        <p
          className={`text-sm line-clamp-3 flex-1 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {excerpt}
        </p>
      </div>
    </div>
  );
}
