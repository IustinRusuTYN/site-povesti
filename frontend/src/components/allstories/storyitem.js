// src/components/allstories/storyitem.js
import React, { useContext } from "react";
import StoryCard from "../storycard";
import { AuthContext } from "../../context/authcontext";
import { useTranslation } from "react-i18next";

export default function StoryItem({ story, onClick, onRequireAuth, darkMode }) {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { t } = useTranslation();

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  const accessLevel = story.accessLevel || "free";
  const userPlan = user?.subscriptionPlan || "free"; // 🔥 citim planul user-ului

  const isPremium = accessLevel === "premium";
  const isBasic = accessLevel === "basic";

  // 🔹 Verificare acces CORECTĂ
  const hasAccess = () => {
    if (accessLevel === "free") return true;
    if (accessLevel === "basic")
      return (
        isAuthenticated && (userPlan === "basic" || userPlan === "premium")
      );
    if (accessLevel === "premium") return userPlan === "premium";
    return false;
  };

  const canAccess = hasAccess();

  const handleClick = () => {
    if (!canAccess) {
      if (!isAuthenticated) {
        onRequireAuth(); // cere login
      } else {
        // user logat dar fără plan potrivit -> redirect la subscribe
        onClick(story.id); // pagina story va afișa mesajul de upgrade
      }
    } else {
      onClick(story.id); // accesează normal
    }
  };

  // Culori badge
  const badgeColors = {
    free: "bg-green-500 text-white",
    basic: "bg-blue-500 text-white",
    premium: "bg-yellow-400 text-gray-800",
  };

  const badgeText = t(`accessLevels.${accessLevel}`);

  return (
    <div
      className={`relative flex flex-col transition transform ${
        !canAccess
          ? "opacity-70 cursor-pointer hover:scale-105"
          : "cursor-pointer hover:scale-105"
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${t("story")}: ${t(`stories.${story.id}.title`)}, ${t(
        "rating"
      )}: ${getAverageRating(story.ratings)}★, ${t("type")}: ${badgeText}`}
    >
      {/* Badge tip poveste */}
      <span
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-md uppercase z-10 ${badgeColors[accessLevel]}`}
      >
        {badgeText}
      </span>

      {/* 🔹 Lacăt doar dacă NU are acces */}
      {!canAccess && (
        <span className="absolute top-2 left-2 text-2xl z-10">🔒</span>
      )}

      <StoryCard
        title={t(`stories.${story.id}.title`)}
        excerpt={t(`stories.${story.id}.excerpt`)}
        image={story.image}
      />

      {/* Categorie + Rating */}
      <div
        className={`mt-2 flex justify-between items-center text-sm font-medium px-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        <span className="italic">{story.category || t("noCategory")}</span>
        <span>
          {t("rating")}: {getAverageRating(story.ratings)}★
        </span>
      </div>
    </div>
  );
}
