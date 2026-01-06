// src/components/profile/profilerecommended.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen, Star, Clock, Loader2 } from "lucide-react";

export default function ProfileRecommended({ darkMode, stories, loading }) {
  const { t } = useTranslation();

  // Loading state
  if (loading) {
    return (
      <div
        className={`flex justify-center items-center py-16 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <Loader2
          className={`w-8 h-8 animate-spin ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        />
      </div>
    );
  }

  // Empty state
  if (!stories || stories.length === 0) {
    return (
      <div
        className={`text-center py-16 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <BookOpen
          className={`w-16 h-16 mx-auto mb-4 ${
            darkMode ? "text-gray-600" : "text-gray-400"
          }`}
        />
        <p
          className={`text-lg mb-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("profile.noRecommendations", "No recommendations available")}
        </p>
        <Link
          to="/allstories"
          className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all"
        >
          {t("profile.exploreStories", "Explore Stories")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {t("profile.recommendedForYou", "Recommended for You")}
      </h2>

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
              {story.image ? (
                <img
                  src={story.image}
                  alt={story.title || "Story"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }">
                        <span class="text-4xl">📖</span>
                      </div>
                    `;
                  }}
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <span className="text-4xl">📖</span>
                </div>
              )}

              {story.category && (
                <div className="absolute top-2 left-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {story.category}
                </div>
              )}

              {story.accessLevel && story.accessLevel !== "free" && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs font-bold ${
                    story.accessLevel === "premium"
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-blue-500"
                  }`}
                >
                  {story.accessLevel.toUpperCase()}
                </div>
              )}
            </div>

            <div className="p-4">
              <h3
                className={`font-bold text-lg mb-2 line-clamp-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {story.title || t("profile.untitledStory", "Untitled Story")}
              </h3>

              <p
                className={`text-sm mb-3 line-clamp-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {story.excerpt ||
                  t("profile.noDescription", "No description available")}
              </p>

              <div className="flex items-center justify-between text-xs">
                <div
                  className={`flex items-center gap-1 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <span>{story.author || "Unknown"}</span>
                </div>

                <div
                  className={`flex items-center gap-1 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <Clock size={12} />
                  <span>{story.readTime || 5} min</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
