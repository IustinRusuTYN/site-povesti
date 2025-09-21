// src/pages/AllStories.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "../components/storycard";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";
import api from "../utils/api";
import storiesData from "../data/stories"; // fallback local

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

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
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
        <div className="flex justify-center mb-8">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Toate" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Loading / Error / Stories */}
        {loading ? (
          <p className="text-center">Se încarcă poveștile...</p>
        ) : filteredStories.length === 0 ? (
          <p className="text-center text-gray-500">
            Nicio poveste găsită...
            {error && (
              <span className="block text-sm text-gray-400">{error}</span>
            )}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="cursor-pointer transition transform hover:scale-105 flex flex-col"
                onClick={() => handleStoryClick(story.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleStoryClick(story.id)
                }
                aria-label={`Poveste: ${
                  story.title
                }, Rating: ${getAverageRating(story.ratings)} stele`}
              >
                <StoryCard
                  title={story.title}
                  excerpt={story.excerpt}
                  image={story.image}
                />
                <p
                  className={`mt-2 text-sm font-medium text-center ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Rating: {getAverageRating(story.ratings)}★
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
