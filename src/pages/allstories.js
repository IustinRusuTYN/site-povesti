import React, { useContext } from "react";
import stories from "../data/stories";
import StoryCard from "../components/storycard";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/ThemeContext";

export default function AllStories() {
  const { darkMode } = useContext(ThemeContext);

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

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              title={story.title}
              excerpt={story.excerpt}
              image={story.image}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
