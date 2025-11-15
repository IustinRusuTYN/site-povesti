// src/pages/profile.js
import React, { useContext, useState, useEffect } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import stories from "../data/stories";

import ProfileTabs from "../components/profile/profiletabs";
import ProfileInfo from "../components/profile/profileinfo";
import ProfileRecent from "../components/profile/profilerecent";
import ProfileRecommended from "../components/profile/profilerecommended";
import ProfileSubscription from "../components/profile/profilesubscription";

import { useTranslation } from "react-i18next";

export default function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const { t } = useTranslation();

  const [recentStories, setRecentStories] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    setRecentStories(saved);

    const shuffled = [...stories].sort(() => 0.5 - Math.random()).slice(0, 4);
    setRecommended(shuffled);
  }, []);

  return (
    <PageLayout>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {t("profile.title")}
        </h1>

        {/* Tabs */}
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Active Tab Content */}
        {activeTab === "info" && (
          <ProfileInfo darkMode={darkMode} user={user} logout={logout} />
        )}
        {activeTab === "recent" && (
          <ProfileRecent darkMode={darkMode} stories={recentStories} />
        )}
        {activeTab === "rec" && (
          <ProfileRecommended darkMode={darkMode} stories={recommended} />
        )}
        {activeTab === "subscription" && (
          <ProfileSubscription darkMode={darkMode} />
        )}
      </section>
    </PageLayout>
  );
}
