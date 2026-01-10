// src/components/profile/profilestats.js
import React from "react";
import { useTranslation } from "react-i18next";
import { BookOpen, Heart, MessageCircle, Star } from "lucide-react";

export default function ProfileStats({
  darkMode,
  user,
  userProfile,
  stats,
  favoritesCount = 0,
}) {
  const { t, i18n } = useTranslation();

  // ✅ STATISTICI REALE
  const realStats = [
    {
      icon: BookOpen,
      label: t("profile.stats.storiesRead", "Stories Read"),
      value: stats?.storiesRead || 0,
      color: "blue",
    },
    {
      icon: Heart,
      label: t("profile.stats.favorites", "Favorites"),
      value: favoritesCount,
      color: "pink",
    },
    {
      icon: MessageCircle,
      label: t("profile.stats.comments", "Comments"),
      value: stats?.comments || 0,
      color: "green",
    },
    {
      icon: Star,
      label: t("profile.stats.ratings", "Ratings Given"),
      value: stats?.ratings || 0,
      color: "yellow",
    },
  ];

  // ✅ ACTIVITATE SĂPTĂMÂNALĂ (MOCK)
  const weekActivity = [
    {
      day: t("profile.days.mon", "Mon"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.tue", "Tue"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.wed", "Wed"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.thu", "Thu"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.fri", "Fri"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.sat", "Sat"),
      count: Math.floor(Math.random() * 5) + 1,
    },
    {
      day: t("profile.days.sun", "Sun"),
      count: Math.floor(Math.random() * 5) + 1,
    },
  ];

  const maxCount = Math.max(...weekActivity.map((d) => d.count));

  const plan = userProfile?.subscription_plan || "free";
  const planLabel = t(`profile.plan.${plan}`, plan);

  // ✅ INFORMAȚII CONT
  const accountInfo = [
    {
      label: t("profile.memberSince", "Member Since"),
      value: userProfile?.created_at
        ? new Date(userProfile.created_at).toLocaleDateString(
            i18n.language || "ro"
          )
        : t("common.na", "N/A"),
    },
    {
      label: t("profile.subscriptionLabel", "Subscription"),
      value: planLabel,
    },
    {
      label: t("profile.language", "Language"),
      value: (userProfile?.preferred_language || "ro").toUpperCase(),
    },
  ];

  return (
    <div className="space-y-6">
      {/* ✅ STATISTICI PRINCIPALE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {realStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.label}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg text-center`}
            >
              <div
                className={`inline-flex p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30 mb-3`}
              >
                <IconComponent
                  className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`}
                />
              </div>
              <div
                className={`text-2xl font-bold mb-1 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ INFORMAȚII CONT */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.accountInfo", "Account Information")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {accountInfo.map((info) => (
            <div key={info.label} className="text-center">
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {info.label}
              </div>
              <div
                className={`text-lg font-semibold capitalize ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ ACTIVITATE SĂPTĂMÂNALĂ */}
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
          {t("profile.weekActivity", "Weekly Activity")}
        </h3>
        <div className="flex items-end justify-between h-40 gap-2">
          {weekActivity.map((day) => (
            <div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex items-end justify-center flex-1">
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                  style={{
                    height: `${(day.count / maxCount) * 100}%`,
                    minHeight: "10px",
                  }}
                  title={t(
                    "profile.weekActivityTooltip",
                    "{{count}} stories read",
                    {
                      count: day.count,
                    }
                  )}
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

      {/* ✅ PROGRES CITIRE */}
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("profile.readingProgress", "Reading Progress")}
        </h3>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                {t("profile.totalProgress", "Total Stories Read")}
              </span>
              <span
                className={`font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stats?.storiesRead || 0}
              </span>
            </div>

            <div
              className={`h-3 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    ((stats?.storiesRead || 0) / 20) * 100,
                    100
                  )}%`,
                }}
              />
            </div>

            <div
              className={`text-xs mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("profile.goal", "Goal: {{count}} stories", { count: 20 })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
