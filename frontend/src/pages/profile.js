// src/pages/profile.js
import React, { useContext, useState, useEffect } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import stories from "../data/stories";
import ProfileTabs from "../components/profile/profiletabs";
import ProfileInfo from "../components/profile/profileinfo";
import ProfileStats from "../components/profile/profilestats";
import ProfileRecent from "../components/profile/profilerecent";
import ProfileRecommended from "../components/profile/profilerecommended";
import ProfileSubscription from "../components/profile/profilesubscription";
import ProfileSettings from "../components/profile/profilesettings";
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

    const shuffled = [...stories].sort(() => 0.5 - Math.random()).slice(0, 8);
    setRecommended(shuffled);
  }, []);

  return (
    <PageLayout>
      <section
        className={`min-h-screen py-10 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <h1
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("profile.title")}
          </h1>
          <p className={`mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            {t("profile.subtitle")}
          </p>

          {/* Tabs */}
          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
          />

          {/* Content */}
          {activeTab === "info" && (
            <ProfileInfo darkMode={darkMode} user={user} logout={logout} />
          )}
          {activeTab === "stats" && (
            <ProfileStats darkMode={darkMode} user={user} />
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
          {activeTab === "settings" && <ProfileSettings darkMode={darkMode} />}
        </div>
      </section>
    </PageLayout>
  );
}
