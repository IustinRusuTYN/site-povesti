// src/components/profile/profilestats.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProfileStats({ darkMode, user }) {
  const { t } = useTranslation();

  const weekActivity = [
    { day: t("profile.days.mon"), count: 3 },
    { day: t("profile.days.tue"), count: 5 },
    { day: t("profile.days.wed"), count: 2 },
    { day: t("profile.days.thu"), count: 4 },
    { day: t("profile.days.fri"), count: 6 },
    { day: t("profile.days.sat"), count: 7 },
    { day: t("profile.days.sun"), count: 3 },
  ];

  const maxCount = Math.max(...weekActivity.map((d) => d.count));

  const categories = [
    { name: t("profile.categories.drama"), count: 12, color: "purple" },
    { name: t("profile.categories.comedy"), count: 8, color: "pink" },
    { name: t("profile.categories.horror"), count: 5, color: "red" },
    { name: t("profile.categories.adventure"), count: 15, color: "blue" },
  ];

  const totalStories = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="space-y-6">
      {/* Activitate Săptămânală */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.weekActivity")}
        </h3>
        <div className="flex items-end justify-between h-40 gap-2">
          {weekActivity.map((day) => (
            <div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex items-end justify-center flex-1">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg hover:opacity-80 transition-opacity"
                  style={{ height: `${(day.count / maxCount) * 100}%` }}
                />
              </div>
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {day.day}
              </span>
              <span
                className={`text-sm font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {day.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorii Preferate */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.favoriteCategories")}
        </h3>
        <div className="space-y-4">
          {categories.map((cat) => {
            const percentage = ((cat.count / totalStories) * 100).toFixed(0);
            return (
              <div key={cat.name}>
                <div className="flex justify-between mb-2">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {cat.count} ({percentage}%)
                  </span>
                </div>
                <div
                  className={`h-3 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`h-full bg-${cat.color}-500 rounded-full transition-all`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
