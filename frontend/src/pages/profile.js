// src/pages/profile.js
import React, { useContext, useState, useEffect, useCallback } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";

// ✅ IMPORT HOOK-URI SUPABASE
import { useFavorites } from "../hooks/useFavorites";
import { getUserStats, getReadingHistory } from "../services/userDataService";
import { getAllStories } from "../services/storiesService";

import ProfileTabs from "../components/profile/profiletabs";
import ProfileInfo from "../components/profile/profileinfo";
import ProfileStats from "../components/profile/profilestats";
import ProfileRecent from "../components/profile/profilerecent";
import ProfileRecommended from "../components/profile/profilerecommended";
import ProfileSubscription from "../components/profile/profilesubscription";
import ProfileSettings from "../components/profile/profilesettings";
import { Loader2 } from "lucide-react";

export default function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const {
    user,
    userProfile,
    signOut,
    loading: authLoading,
  } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  // ✅ HOOK PENTRU FAVORITE DIN SUPABASE
  const { favorites, loading: favoritesLoading } = useFavorites();

  // ✅ STATE PENTRU DATE DIN SUPABASE
  const [recentStories, setRecentStories] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [userStats, setUserStats] = useState({
    favorites: 0,
    storiesRead: 0,
    comments: 0,
    ratings: 0,
  });
  const [activeTab, setActiveTab] = useState("info");
  const [tabLoading, setTabLoading] = useState({
    recent: false,
    rec: false,
    stats: false,
  });
  const [error, setError] = useState(null);

  // ✅ ÎNCĂRCĂM STATISTICILE O SINGURĂ DATĂ
  const loadUserStats = useCallback(async () => {
    if (!user?.id || userStats.storiesRead > 0) return; // Nu reîncărcăm dacă avem deja date

    try {
      const { data: stats, error: statsError } = await getUserStats(user.id);
      if (statsError) {
        console.warn("Stats error:", statsError);
      } else if (stats) {
        setUserStats(stats);
      }
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  }, [user?.id, userStats.storiesRead]);

  // ✅ ÎNCĂRCĂM ISTORICUL DOAR CÂND E NECESAR
  const loadRecentStories = useCallback(async () => {
    if (!user?.id || recentStories.length > 0) return; // Nu reîncărcăm dacă avem deja date

    setTabLoading((prev) => ({ ...prev, recent: true }));
    try {
      const { data: history, error: historyError } = await getReadingHistory(
        user.id,
        i18n.language
      );
      if (historyError) {
        console.warn("History error:", historyError);
      } else if (history) {
        setRecentStories(history);
      }
    } catch (error) {
      console.error("Error loading recent stories:", error);
    } finally {
      setTabLoading((prev) => ({ ...prev, recent: false }));
    }
  }, [user?.id, i18n.language, recentStories.length]);

  // ✅ ÎNCĂRCĂM RECOMANDĂRILE DOAR CÂND E NECESAR
  const loadRecommended = useCallback(async () => {
    if (recommended.length > 0) return; // Nu reîncărcăm dacă avem deja date

    setTabLoading((prev) => ({ ...prev, rec: true }));
    try {
      const { data: allStories, error: storiesError } = await getAllStories(
        i18n.language
      );
      if (storiesError) {
        console.warn("Stories error:", storiesError);
      } else if (allStories && allStories.length > 0) {
        const shuffled = [...allStories]
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);
        setRecommended(shuffled);
      }
    } catch (error) {
      console.error("Error loading recommended stories:", error);
    } finally {
      setTabLoading((prev) => ({ ...prev, rec: false }));
    }
  }, [i18n.language, recommended.length]);

  // ✅ ÎNCĂRCĂM STATISTICILE LA ÎNCEPUT
  useEffect(() => {
    if (!authLoading && user?.id) {
      loadUserStats();
    }
  }, [authLoading, user?.id, loadUserStats]);

  // ✅ ÎNCĂRCĂM DATELE PENTRU TAB-UL ACTIV
  useEffect(() => {
    if (authLoading || !user?.id) return;

    switch (activeTab) {
      case "recent":
        loadRecentStories();
        break;
      case "rec":
        loadRecommended();
        break;
      default:
        break;
    }
  }, [activeTab, authLoading, user?.id, loadRecentStories, loadRecommended]);

  // ✅ LOADING STATE PENTRU AUTH
  if (authLoading) {
    return (
      <PageLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2
            className={`w-12 h-12 animate-spin ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
        </div>
      </PageLayout>
    );
  }

  // ✅ ERROR STATE
  if (error) {
    return (
      <PageLayout>
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div
            className={`p-6 rounded-xl text-center ${
              darkMode
                ? "bg-red-900/20 text-red-300"
                : "bg-red-100 text-red-700"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">
              {t("profile.errorTitle", "Error Loading Profile")}
            </h2>
            <p className="mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              {t("profile.retry", "Retry")}
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

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
            {t("profile.title", "My Profile")}
          </h1>
          <p className={`mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            {t("profile.subtitle", "Manage your account and preferences")}
          </p>

          {/* Tabs */}
          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
          />

          {/* Content */}
          {activeTab === "info" && (
            <ProfileInfo
              darkMode={darkMode}
              user={user}
              userProfile={userProfile}
              logout={signOut}
            />
          )}
          {activeTab === "stats" && (
            <ProfileStats
              darkMode={darkMode}
              user={user}
              userProfile={userProfile}
              stats={userStats}
              favoritesCount={favorites.length}
            />
          )}
          {activeTab === "recent" && (
            <ProfileRecent
              darkMode={darkMode}
              stories={recentStories}
              loading={tabLoading.recent}
            />
          )}
          {activeTab === "rec" && (
            <ProfileRecommended
              darkMode={darkMode}
              stories={recommended}
              loading={tabLoading.rec}
            />
          )}
          {activeTab === "subscription" && (
            <ProfileSubscription
              darkMode={darkMode}
              userProfile={userProfile}
            />
          )}
          {activeTab === "settings" && (
            <ProfileSettings
              darkMode={darkMode}
              user={user}
              userProfile={userProfile}
            />
          )}
        </div>
      </section>
    </PageLayout>
  );
}
