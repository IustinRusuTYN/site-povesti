// src/components/profile/profilerecommended.js
import React from "react";
import { Link } from "react-router-dom";

export default function ProfileRecommended({ darkMode, stories }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
      {stories.map((story) => (
        <Link
          key={story.id}
          to={`/story/${story.id}`}
          className={`block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <h3
              className={`font-semibold ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {story.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
