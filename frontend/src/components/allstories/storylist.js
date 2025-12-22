// src/components/allstories/storylist.js
import React from "react";
import StoryItem from "./storyitem";

export default function StoryList({
  stories,
  onStoryClick,
  onRequireAuth,
  darkMode,
}) {
  return (
    <div
      className="
        grid gap-4
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6
        xl:grid-cols-7
        mb-10
      "
    >
      {stories.map((story) => (
        <StoryItem
          key={story.id}
          story={story}
          onClick={onStoryClick}
          onRequireAuth={onRequireAuth}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}
