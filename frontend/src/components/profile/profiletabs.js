// src/components/profile/profiletabs.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProfileTabs({ activeTab, setActiveTab, darkMode }) {
  const { t } = useTranslation();

  const tabs = [
    { id: "info", label: t("profile.tabs.info") },
    { id: "stats", label: t("profile.tabs.stats") },
    { id: "recent", label: t("profile.tabs.recent") },
    { id: "rec", label: t("profile.tabs.recommended") },
    { id: "subscription", label: t("profile.tabs.subscription") },
    { id: "settings", label: t("profile.tabs.settings") },
  ];

  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : darkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
