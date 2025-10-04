import React from "react";
import Rating from "../rating";

export default function StoryHeader({
  story,
  darkMode,
  rating,
  votes,
  onRate,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={story.image}
        alt={story.title}
        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
      />
      <div className="flex-1">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {story.title}
        </h1>
        {story.category && (
          <span
            className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-gray-700 text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {story.category}
          </span>
        )}
        <p
          className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {story.excerpt}
        </p>

        <div className="mt-4 flex items-center space-x-2">
          <span
            className={`${
              darkMode ? "text-gray-100" : "text-gray-800"
            } font-medium text-sm`}
          >
            Rating mediu:
          </span>
          <span className="text-yellow-400 text-sm">
            {votes > 0 ? rating.toFixed(1) : "N/A"}★
          </span>
        </div>

        <div className="mt-2">
          <Rating rating={rating} votes={votes} onRate={onRate} />
        </div>
      </div>
    </div>
  );
}
