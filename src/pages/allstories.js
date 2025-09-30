import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import api from "../utils/api";
import storiesData from "../data/stories"; // fallback local

import CategoryFilter from "../components/allstories/categoryfilter";
import StoryList from "../components/allstories/storylist";
import LoadingError from "../components/allstories/loadingerror";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const navigate = useNavigate();

  const [stories, setStories] = useState(storiesData); // fallback imediat
  const [filteredStories, setFilteredStories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stories din backend, fallback la local dacă e eroare
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await api.get("/stories"); // endpoint backend
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

  // Extrage categoriile disponibile
  const categories = [
    "all",
    ...new Set(stories.map((s) => s.category).filter(Boolean)),
  ];

  // Filtrare stories după query și categorie
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

  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold text-center mb-6 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Toate poveștile
        </h1>

        {/* Filtrare categorii */}
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
