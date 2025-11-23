// src/components/profile/profilerecent.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProfileRecent({ darkMode, stories }) {
  const { t } = useTranslation();

  if (!stories || stories.length === 0) {
    return (
      <div
        className={`text-center py-16 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <p
          className={`text-lg mb-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("profile.noRecentStories")}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
        >
          {t("profile.exploreStories")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.recentStories")}
        </h2>
        <button
          onClick={() => {
            localStorage.removeItem("recentStories");
            window.location.reload();
          }}
          className={`text-sm ${
            darkMode
              ? "text-gray-400 hover:text-red-400"
              : "text-gray-600 hover:text-red-600"
          }`}
        >
          {t("profile.clearHistory")}
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            className={`block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="relative h-48">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                {story.category}
              </div>
            </div>
            <div className="p-4">
              <h3
                className={`font-bold text-lg mb-2 line-clamp-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {story.title}
              </h3>
              <p
                className={`text-sm mb-3 line-clamp-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {story.description}
              </p>
              <div
                className={`flex justify-between text-xs ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                <span>{story.author}</span>
                <span>{story.readTime} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
