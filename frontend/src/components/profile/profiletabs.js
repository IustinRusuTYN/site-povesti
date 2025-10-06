// src/components/profile/profiletabs.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const { darkMode } = useContext(ThemeContext);

  const tabs = [
    { id: "info", label: "Informații cont" },
    { id: "recent", label: "Povești recente" },
    { id: "rec", label: "Recomandări" },
    { id: "subscription", label: "Abonament" },
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
