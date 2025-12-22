// src/components/allstories/storyitem.js
import React, { useContext } from "react";
import StoryCard from "../storycard";
import { AuthContext } from "../../context/authcontext";
import { useTranslation } from "react-i18next";
import { Lock, Star } from "lucide-react";

export default function StoryItem({ story, onClick, onRequireAuth, darkMode }) {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { t } = useTranslation();

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  const accessLevel = story.accessLevel || "free";
  const userPlan = user?.subscriptionPlan || "free";

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
        onRequireAuth();
      } else {
        onClick(story.id);
      }
    } else {
      onClick(story.id);
    }
  };

  const badgeColors = {
    free: "bg-green-500 text-white",
    basic: "bg-blue-500 text-white",
    premium: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900",
  };

  const badgeText = t(`accessLevels.${accessLevel}`);
  const avgRating = getAverageRating(story.ratings);

  return (
    <div
      className={`group relative cursor-pointer ${
        !canAccess ? "opacity-80" : ""
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${t("story")}: ${t(`stories.${story.id}.title`)}, ${t(
        "rating"
      )}: ${avgRating}★, ${t("type")}: ${badgeText}`}
    >
      {/* Access Badge - Top Right */}
      <div className="absolute top-2 right-2 z-20">
        <span
          className={`px-2 py-1 text-[10px] font-bold rounded-md uppercase shadow-lg ${badgeColors[accessLevel]}`}
        >
          {badgeText}
        </span>
      </div>

      {/* Lock Icon - Top Left (only if no access) */}
      {!canAccess && (
        <div className="absolute top-2 left-2 z-20">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-1.5">
            <Lock size={16} className="text-white" />
          </div>
        </div>
      )}

      {/* Story Card */}
      <StoryCard
        title={t(`stories.${story.id}.title`)}
        excerpt={t(`stories.${story.id}.excerpt`)}
        image={story.image}
        variant="compact" // 🔥 ADĂUGAT
      />

      {/* Footer Info - Category + Rating */}
      <div
        className={`mt-2 flex items-center justify-between text-xs px-1 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {/* Category */}
        <span className="font-medium truncate flex-1">
          {story.category || t("noCategory")}
        </span>

        {/* Rating */}
        {avgRating !== "N/A" && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{avgRating}</span>
          </div>
        )}
      </div>
    </div>
  );
}
