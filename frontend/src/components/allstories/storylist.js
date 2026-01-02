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
        grid
        gap-4 sm:gap-7 md:gap-4
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6
        xl:grid-cols-7
        mb-10
        items-stretch

        auto-rows-[220px]
        sm:auto-rows-[250px]
        md:auto-rows-[270px]

        [&>*]:h-full
      "
    >
      {(stories || []).map((story) => (
        <StoryItem
          key={story._id || story.id}
          story={story}
          onClick={onStoryClick}
          onRequireAuth={onRequireAuth}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}
