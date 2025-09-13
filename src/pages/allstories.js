// src/pages/AllStories.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stories from "../data/stories";
import StoryCard from "../components/storycard";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const navigate = useNavigate();

  const [filteredStories, setFilteredStories] = useState(stories);
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Extrage toate categoriile disponibile
  const categories = [
    "all",
    ...new Set(stories.map((s) => s.category).filter(Boolean)),
  ];

  useEffect(() => {
    let filtered = stories;

    // Filtrare categorie
    if (categoryFilter !== "all") {
      filtered = filtered.filter((story) => story.category === categoryFilter);
    }

    // Filtrare după search
    if (query && query.trim() !== "") {
      filtered = filtered.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) ||
          story.excerpt.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredStories(filtered);
  }, [query, categoryFilter]);

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

        {/* Filtrare Categorii */}
        <div className="flex justify-center mb-8">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`px-4 py-2 rounded-md border ${
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

        {filteredStories.length === 0 ? (
          <p className="text-center text-gray-500">Nicio poveste găsită...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredStories.map((story) => {
              // Calcul rating mediu
              const averageRating =
                story.ratings && story.ratings.length > 0
                  ? (
                      story.ratings.reduce((a, b) => a + b, 0) /
                      story.ratings.length
                    ).toFixed(1)
                  : "N/A";

              return (
                <div
                  key={story.id}
                  className="cursor-pointer transition transform hover:scale-105 flex flex-col"
                  onClick={() => handleStoryClick(story.id)}
                >
                  <StoryCard
                    title={story.title}
                    excerpt={story.excerpt}
                    image={story.image}
                  />
                  {/* Afișare doar rating numeric */}
                  <p
                    className={`mt-2 text-sm font-medium text-center ${
                      darkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Rating: {averageRating}★
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
