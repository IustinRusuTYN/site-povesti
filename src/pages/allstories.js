import React, { useContext, useEffect, useState } from "react";
import stories from "../data/stories";
import StoryCard from "../components/storycard";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { SearchContext } from "../context/searchcontext";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);
  const { query } = useContext(SearchContext);
  const [filteredStories, setFilteredStories] = useState(stories);

  useEffect(() => {
    if (query && query.trim() !== "") {
      const filtered = stories.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) ||
          story.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStories(filtered);
    } else {
      setFilteredStories(stories);
    }
  }, [query]);

  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Toate poveștile
        </h1>

        {filteredStories.length === 0 ? (
          <p className="text-center text-gray-500">Nicio poveste găsită...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
              />
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
