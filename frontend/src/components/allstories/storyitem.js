// src/components/allstories/storyitem.js
import React, { useContext } from "react";
import StoryCard from "../storycard";
import { AuthContext } from "../../context/authcontext";

export default function StoryItem({ story, onClick, onRequireAuth, darkMode }) {
  const { isAuthenticated } = useContext(AuthContext);

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  const accessLevel = story.accessLevel || "free";
  const isPremium = accessLevel === "premium";
  const isBasic = accessLevel === "basic";

  const handleClick = () => {
    if (isPremium) return; // Premium e blocat complet
    if (isBasic && !isAuthenticated) {
      onRequireAuth(); // deschide modalul de log-in
      return;
    }
    onClick(story.id); // accesează povestea
  };

  // badge colors
  const badgeColors = {
    free: "bg-green-500 text-white",
    basic: "bg-blue-500 text-white",
    premium: "bg-yellow-400 text-gray-800",
  };

  return (
    <div
      key={story.id}
      className={`relative flex flex-col transition transform ${
        isPremium
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:scale-105"
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`Poveste: ${story.title}, Rating: ${getAverageRating(
        story.ratings
      )} stele, Tip: ${accessLevel}`}
    >
      {/* Badge tip poveste - dreapta sus */}
      <span
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-md uppercase ${badgeColors[accessLevel]}`}
      >
        {accessLevel}
      </span>

      <StoryCard
        title={story.title}
        excerpt={story.excerpt}
        image={story.image}
      />

      {/* Categorie + Rating pe aceeași linie */}
      <div
        className={`mt-2 flex justify-between items-center text-sm font-medium px-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        <span className="italic">{story.category || "Fără categorie"}</span>
        <span>Rating: {getAverageRating(story.ratings)}★</span>
      </div>
    </div>
  );
}
