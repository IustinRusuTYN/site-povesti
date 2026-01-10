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

// -------------------- helpers pentru recomandări stabile --------------------
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seedStr) {
  const rand = mulberry32(hashString(seedStr));
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWeekKey() {
  const d = new Date();
  const oneJan = new Date(d.getFullYear(), 0, 1);
  const day = Math.floor((d - oneJan) / 86400000);
  const week = Math.ceil((day + oneJan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}
// --------------------------------------------------------------------------

export default function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const {
    user,
    userProfile,
    signOut,
    loading: authLoading,
  } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  const { favorites } = useFavorites();

  const [recentStories, setRecentStories] = useState([]);
  const [recommended, setRecommended] = useState([]); // ✅ LIPSEA la tine
  const [recSeed, setRecSeed] = useState(null);

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

  // ✅ ÎNCĂRCĂM STATISTICILE
  const loadUserStats = useCallback(async () => {
    if (!user?.id) return;

    try {
      const { data: stats, error: statsError } = await getUserStats(user.id);
      if (statsError) {
        console.warn("Stats error:", statsError);
        return;
      }
      if (stats) setUserStats(stats);
    } catch (e) {
      console.error("Error loading stats:", e);
    }
  }, [user?.id]);

  // ✅ ÎNCĂRCĂM ISTORICUL (recent)
  const loadRecentStories = useCallback(async () => {
    if (!user?.id) return;
    if (recentStories.length > 0) return; // cache local

    setTabLoading((prev) => ({ ...prev, recent: true }));
    try {
      const { data: history, error: historyError } = await getReadingHistory(
        user.id,
        i18n.language
      );

      if (historyError) {
        console.warn("History error:", historyError);
        return;
      }

      if (history) setRecentStories(history);
    } catch (e) {
      console.error("Error loading recent stories:", e);
    } finally {
      setTabLoading((prev) => ({ ...prev, recent: false }));
    }
  }, [user?.id, i18n.language, recentStories.length]);

  // ✅ RECOMANDĂRI STABILE (nu se schimbă la schimbarea limbii)
  const loadRecommended = useCallback(async () => {
    // dacă deja avem recomandări pentru seed-ul curent, nu refacem
    const seed = `${user?.id || "guest"}-${getWeekKey()}`;
    if (recSeed === seed && recommended.length > 0) return;

    setTabLoading((prev) => ({ ...prev, rec: true }));

    try {
      // IMPORTANT:
      // Nu mai legăm recomandările de limbă (altfel re-fetch + re-shuffle).
      // Titlurile/excerpt-urile sunt traduse în componentă folosind storyNumber.
      const { data: allStories, error: storiesError } = await getAllStories(
        "ro"
      );

      if (storiesError) {
        console.warn("Stories error:", storiesError);
        return;
      }

      if (!allStories || allStories.length === 0) return;

      setRecSeed(seed);

      // stabilizăm ordinea de bază înainte de shuffle
      const base = [...allStories].sort(
        (a, b) =>
          (a.storyNumber || a.story_number || 0) -
          (b.storyNumber || b.story_number || 0)
      );

      const picked = seededShuffle(base, seed).slice(0, 8);
      setRecommended(picked);
    } catch (e) {
      console.error("Error loading recommended stories:", e);
    } finally {
      setTabLoading((prev) => ({ ...prev, rec: false }));
    }
  }, [user?.id, recSeed, recommended.length]);

  // ✅ stats la început
  useEffect(() => {
    if (!authLoading && user?.id) loadUserStats();
  }, [authLoading, user?.id, loadUserStats]);

  // ✅ încărcăm ce trebuie când schimbăm tab-ul
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

  // LOADING AUTH
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

  // ERROR
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

          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
          />

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
