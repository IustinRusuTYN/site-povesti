// src/pages/AllStories.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";

import CategoryFilter from "../components/allstories/categoryfilter";
import StoryList from "../components/allstories/storylist";
import LoadingError from "../components/allstories/loadingerror";
import SignInForm from "../components/forms/SignInForm";

// ✅ IMPORT HOOK-URILE NOI
import { useStories, useCategories } from "../hooks/useStories";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  // ✅ FOLOSIM HOOK-URILE DIN SUPABASE
  const { stories, loading, error } = useStories();
  useEffect(() => {
    if (stories?.length) {
      const s = stories[0];
      console.log("IMAGE DEBUG STRING:", {
        image: String(s?.image),
        image_url: String(s?.image_url),
        imageUrl: String(s?.imageUrl),
        title: s?.title,
        id: s?.id,
      });
      console.log("FIRST STORY JSON:", JSON.stringify(s, null, 2));
    }
  }, [stories]);
  const { categories: dbCategories } = useCategories();

  const [filteredStories, setFilteredStories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showSignInModal, setShowSignInModal] = useState(false);

  // Construim lista de categorii
  const categories = ["all", ...dbCategories.map((cat) => cat.name)];

  // Filtrare după categorie și query de căutare
  useEffect(() => {
    if (!stories || stories.length === 0) {
      setFilteredStories([]);
      return;
    }

    const filtered = stories.filter((story) => {
      if (!story) return false;

      // Filtrare după categorie
      const matchesCategory =
        categoryFilter === "all" || story.category === categoryFilter;

      // Filtrare după search query
      const safeTitle = typeof story.title === "string" ? story.title : "";
      const safeExcerpt =
        typeof story.excerpt === "string" ? story.excerpt : "";
      const safeQuery = typeof query === "string" ? query.toLowerCase() : "";

      const matchesQuery =
        safeQuery === "" ||
        safeTitle.toLowerCase().includes(safeQuery) ||
        safeExcerpt.toLowerCase().includes(safeQuery);

      return matchesCategory && matchesQuery;
    });

    setFilteredStories(filtered);
  }, [stories, query, categoryFilter]);

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
            {!loading && (
              <p
                className={`text-center text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {filteredStories.length} {t("storiesFound")}
              </p>
            )}
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
          {!loading && !error && filteredStories.length > 0 && (
            <StoryList
              stories={filteredStories}
              onStoryClick={handleStoryClick}
              onRequireAuth={handleRequireAuth}
              darkMode={darkMode}
            />
          )}

          {/* No Results */}
          {!loading && !error && filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p
                className={`text-lg mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t("noStoriesFound")}
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
