// src/components/profile/profiletabs.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
import { useTranslation } from "react-i18next";

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const tabs = [
    { id: "info", label: t("profile.tabs.info") },
    { id: "recent", label: t("profile.tabs.recent") },
    { id: "rec", label: t("profile.tabs.recommended") },
    { id: "subscription", label: t("profile.tabs.subscription") },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : darkMode
              ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
