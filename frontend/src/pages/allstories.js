// src/pages/AllStories.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import storiesData from "../data/stories"; // fallback local
import api from "../utils/api";

import CategoryFilter from "../components/allstories/categoryfilter";
import StoryList from "../components/allstories/storylist";
import LoadingError from "../components/allstories/loadingerror";
import SignInForm from "../components/forms/SignInForm";
import { AuthContext } from "../context/authcontext";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const [stories, setStories] = useState(storiesData);
  const [filteredStories, setFilteredStories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal SignIn
  const [showSignInModal, setShowSignInModal] = useState(false);

  // Fetch stories from backend with fallback
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
        setError("Se folosesc date locale.");
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  // Extract categories
  const categories = [
    "all",
    ...new Set(stories.map((s) => s.category).filter(Boolean)),
  ];

  // Filter stories by query & category
  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const filtered = stories.filter((story) => {
      const matchesCategory =
        categoryFilter === "all" || story.category === categoryFilter;
      const matchesQuery =
        !query ||
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    setFilteredStories(filtered);
  }, [stories, query, categoryFilter]);

  const handleStoryClick = (id) => {
    navigate(`/story/${id}`);
  };

  const handleRequireAuth = () => {
    setShowSignInModal(true);
  };

  return (
    <PageLayout>
      {/* SignIn Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <SignInForm onClose={() => setShowSignInModal(false)} />
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold text-center mb-6 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Toate poveștile
        </h1>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          darkMode={darkMode}
        />

        {/* Loading / Error / Stories */}
        <LoadingError loading={loading} error={error} />

        {!loading && filteredStories.length > 0 && (
          <StoryList
            stories={filteredStories}
            onStoryClick={handleStoryClick}
            onRequireAuth={handleRequireAuth}
            darkMode={darkMode}
          />
        )}

        {!loading && filteredStories.length === 0 && (
          <p className="text-center text-gray-500">
            Nicio poveste găsită...
            {error && (
              <span className="block text-sm text-gray-400">{error}</span>
            )}
          </p>
        )}
      </section>
    </PageLayout>
  );
}
