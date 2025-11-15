import React from "react";
import StoryItem from "./storyitem";

export default function StoryList({
  stories,
  onStoryClick,
  onRequireAuth,
  darkMode,
  useTranslation, // 🔹 funcția t transmisă din AllStories
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
      {stories.map((story) => (
        <StoryItem
          key={story.id}
          story={story}
          onClick={onStoryClick}
          onRequireAuth={onRequireAuth}
          darkMode={darkMode}
          useTranslation={useTranslation} // 🔹 trimitem t pentru fiecare item
        />
      ))}
    </div>
  );
}
