// src/components/profile/profilerecommended.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen, Clock, Loader2, User } from "lucide-react";

export default function ProfileRecommended({ darkMode, stories, loading }) {
  const { t } = useTranslation();

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
        {stories.map((story) => {
          // IMPORTANT: storyNumber trebuie să vină din DB (stories.story_number)
          const storyKey = story.storyNumber ?? story.story_number ?? null;

          const localizedTitle = storyKey
            ? t(`stories.${storyKey}.title`, {
                defaultValue:
                  story.title || t("profile.untitledStory", "Untitled Story"),
              })
            : story.title || t("profile.untitledStory", "Untitled Story");

          const localizedExcerpt = storyKey
            ? t(`stories.${storyKey}.excerpt`, {
                defaultValue:
                  story.excerpt ||
                  t("profile.noDescription", "No description available"),
              })
            : story.excerpt ||
              t("profile.noDescription", "No description available");

          const accessLabel = story.accessLevel
            ? t(
                `accessLevels.${story.accessLevel}`,
                story.accessLevel
              ).toUpperCase()
            : null;

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
                    alt={localizedTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = "flex";
                      }
                    }}
                  />
                ) : null}

                {/* fallback */}
                <div
                  className={`w-full h-full items-center justify-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  } ${story.image ? "hidden" : "flex"}`}
                >
                  <span className="text-4xl">📖</span>
                </div>

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
                        : story.accessLevel === "basic"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {accessLabel}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3
                  className={`font-bold text-lg mb-2 line-clamp-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {localizedTitle}
                </h3>

                <p
                  className={`text-sm mb-3 line-clamp-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {localizedExcerpt}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-500">
                    <User size={12} />
                    <span>
                      {story.author || t("profile.unknownAuthor", "Unknown")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock size={12} />
                    <span>
                      {story.readTime || 5} {t("common.minutesShort", "min")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
