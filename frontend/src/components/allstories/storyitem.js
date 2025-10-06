import React from "react";
import StoryCard from "../storycard";

export default function StoryItem({ story, onClick, darkMode }) {
  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <div
      key={story.id}
      className="cursor-pointer transition transform hover:scale-105 flex flex-col"
      onClick={() => onClick(story.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(story.id)}
      aria-label={`Poveste: ${story.title}, Rating: ${getAverageRating(
        story.ratings
      )} stele`}
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
  );
}
