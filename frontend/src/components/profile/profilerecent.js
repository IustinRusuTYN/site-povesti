// src/components/profile/profilerecent.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Clock, BookOpen, Loader2, User } from "lucide-react";

export default function ProfileRecent({ darkMode, stories, loading }) {
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
          {t("profile.noRecentStories", "No recent stories yet")}
        </p>
        <p
          className={`text-sm mb-6 ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          {t("profile.startReading", "Start reading stories to see them here")}
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
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.recentStories", "Recently Read")}
        </h2>
        <span
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {stories.length} {t("profile.stories", "stories")}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stories.map((story) => {
          // ✅ DEBUG - să vedem ce primim
          console.log("Rendering story:", story);

          return (
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
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                ) : null}

                {/* Fallback pentru imagini lipsă */}
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  } ${story.image ? "hidden" : "flex"}`}
                >
                  <span className="text-4xl">📖</span>
                </div>

                {/* ✅ CATEGORY BADGE */}
                {story.category && story.category !== "Uncategorized" && (
                  <div className="absolute top-2 left-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {story.category}
                  </div>
                )}

                {/* ✅ ACCESS LEVEL BADGE */}
                {story.accessLevel && story.accessLevel !== "free" && (
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs font-bold ${
                      story.accessLevel === "premium"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : story.accessLevel === "basic"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {story.accessLevel.toUpperCase()}
                  </div>
                )}

                {/* ✅ PROGRESS BAR */}
                {story.progress && story.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                    <div
                      className="h-full bg-indigo-500"
                      style={{ width: `${Math.min(story.progress, 100)}%` }}
                    />
                  </div>
                )}
              </div>

              <div className="p-4">
                {/* ✅ TITLE */}
                <h3
                  className={`font-bold text-lg mb-2 line-clamp-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {story.title}
                </h3>

                {/* ✅ EXCERPT/DESCRIPTION */}
                <p
                  className={`text-sm mb-3 line-clamp-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {story.excerpt}
                </p>

                {/* ✅ META INFO */}
                <div className="flex items-center gap-4 text-xs mb-3">
                  {story.readTime && (
                    <div
                      className={`flex items-center gap-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Clock size={12} />
                      <span>{story.readTime} min</span>
                    </div>
                  )}

                  {story.author && story.author !== "Unknown Author" && (
                    <div
                      className={`flex items-center gap-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <User size={12} />
                      <span>{story.author}</span>
                    </div>
                  )}

                  {story.lastReadAt && (
                    <div
                      className={`${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {new Date(story.lastReadAt).toLocaleDateString("ro-RO", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  )}
                </div>

                {/* ✅ PROGRESS BAR DETAILED */}
                {story.progress !== undefined && story.progress > 0 && (
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        {t("profile.progress", "Progress")}
                      </span>
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        {Math.min(story.progress, 100)}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                        style={{ width: `${Math.min(story.progress, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* ✅ FOOTER */}
                <div
                  className={`flex justify-between items-center text-xs ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <span>{story.category}</span>
                  {story.progress === 100 && (
                    <span className="text-green-500 font-medium">
                      ✓ {t("profile.completed", "Completed")}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
