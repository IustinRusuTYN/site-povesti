// src/pages/AllStories.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import storiesData from "../data/stories";
import api from "../utils/api";
import { getStoryText } from "../utils/storyHelpers";

import CategoryFilter from "../components/allstories/categoryfilter";
import StoryList from "../components/allstories/storylist";
import LoadingError from "../components/allstories/loadingerror";
import SignInForm from "../components/forms/SignInForm";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [stories, setStories] = useState(storiesData);
  const [filteredStories, setFilteredStories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await api.get("/stories");
        setStories(res.data);
        setError(null);
      } catch (err) {
        console.warn(
          "Nu am putut încărca de la backend, folosesc date locale."
        );
        setError(t("usingLocalData"));
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, [t]);

  const categories = [
    "all",
    ...new Set(stories.map((s) => s.category).filter(Boolean)),
  ];

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const filtered = stories.filter((story, index) => {
      if (!story) {
        console.warn("Story undefined la index:", index);
        return false;
      }

      const matchesCategory =
        categoryFilter === "all" || story.category === categoryFilter;

      const { title, excerpt } = getStoryText(story, i18n.language);

      const safeTitle = typeof title === "string" ? title : "";
      const safeExcerpt = typeof excerpt === "string" ? excerpt : "";
      const safeQuery = typeof query === "string" ? query : "";

      const matchesQuery =
        safeQuery === "" ||
        safeTitle.toLowerCase().includes(safeQuery.toLowerCase()) ||
        safeExcerpt.toLowerCase().includes(safeQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });

    setFilteredStories(filtered);
  }, [stories, query, categoryFilter, i18n.language]);

  const handleStoryClick = (id) => navigate(`/story/${id}`);
  const handleRequireAuth = () => setShowSignInModal(true);

  return (
    <PageLayout>
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <SignInForm onClose={() => setShowSignInModal(false)} />
        </div>
      )}

      <section
        className={`min-h-screen py-8 px-4 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1
              className={`text-3xl md:text-4xl font-bold text-center mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t("allStoriesTitle")}
            </h1>
            <p
              className={`text-center text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {filteredStories.length} {t("storiesFound")}
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            darkMode={darkMode}
          />

          {/* Loading/Error */}
          <LoadingError loading={loading} error={error} darkMode={darkMode} />

          {/* Story Grid */}
          {!loading && filteredStories.length > 0 && (
            <StoryList
              stories={filteredStories}
              onStoryClick={handleStoryClick}
              onRequireAuth={handleRequireAuth}
              darkMode={darkMode}
            />
          )}

          {/* No Results */}
          {!loading && filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p
                className={`text-lg mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t("noStoriesFound")}
              </p>
              {error && (
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {error}
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
