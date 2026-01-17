// src/components/allstories/storyitem.js
import React, { useContext, useMemo } from "react";
import StoryCard from "../storycard";
import { AuthContext } from "../../context/authcontext";
import { useTranslation } from "react-i18next";
import { Lock, Star } from "lucide-react";
import { getStoryImageSrc } from "../../utils/imageHelper";

export default function StoryItem({ story, onClick, onRequireAuth, darkMode }) {
  const { isAuthenticated, userProfile } = useContext(AuthContext);
  const { t } = useTranslation();

  const accessLevel = story?.accessLevel || story?.access_level || "free";
  const userPlan = userProfile?.subscription_plan || "free";

  const hasAccess = () => {
    if (accessLevel === "free") return true;
    if (accessLevel === "basic") {
      return (
        isAuthenticated && (userPlan === "basic" || userPlan === "premium")
      );
    }
    if (accessLevel === "premium") return userPlan === "premium";
    return false;
  };

  const canAccess = hasAccess();

  const categoryLabel =
    story?.category ||
    story?.genre ||
    story?.category_name ||
    story?.category?.name ||
    t("noCategory");

  const ratingMeta = useMemo(() => {
    const directAvg =
      story?.avg_rating ??
      story?.average_rating ??
      story?.rating_avg ??
      story?.avgRating;

    const directVotes =
      story?.rating_count ?? story?.ratings_count ?? story?.ratingCount;

    if (typeof directAvg === "number" && !Number.isNaN(directAvg)) {
      return {
        avg: Number(directAvg.toFixed(1)),
        votes: typeof directVotes === "number" ? directVotes : 0,
      };
    }

    const r = story?.ratings;
    if (!Array.isArray(r) || r.length === 0) return { avg: null, votes: 0 };

    const values = r
      .map((x) => (typeof x === "number" ? x : x?.rating))
      .filter((x) => typeof x === "number" && !Number.isNaN(x));

    if (values.length === 0) return { avg: null, votes: 0 };

    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;

    return { avg: Number(avg.toFixed(1)), votes: values.length };
  }, [story]);

  const badgeText = t(`accessLevels.${accessLevel}`);

  const badgeColors = {
    free: "bg-green-500 text-white",
    basic: "bg-blue-500 text-white",
    premium: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900",
  };

  const handleClick = () => {
    if (!story?.id) return;

    if (!canAccess) {
      if (!isAuthenticated) onRequireAuth?.();
      else onClick?.(story.id);
    } else {
      onClick?.(story.id);
    }
  };

  const title = story?.title || "No title";
  const excerpt = story?.excerpt || "No excerpt";
  const imageSrc = getStoryImageSrc(story);

  const ratingText = ratingMeta.avg !== null ? ratingMeta.avg : "—";
  const votesText = typeof ratingMeta.votes === "number" ? ratingMeta.votes : 0;

  return (
    <div
      className={`group relative cursor-pointer h-full z-0 hover:z-10 ${
        !canAccess ? "opacity-80" : ""
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${t("story")}: ${title}, ${t("type")}: ${badgeText}`}
    >
      {/* Badge */}
      <div className="absolute top-2 right-2 z-20">
        <span
          className={`px-2 py-1 text-[10px] font-bold rounded-md uppercase shadow-lg ${badgeColors[accessLevel]}`}
        >
          {badgeText}
        </span>
      </div>

      {/* Lock */}
      {!canAccess && (
        <div className="absolute top-2 left-2 z-20">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-1.5">
            <Lock size={16} className="text-white" />
          </div>
        </div>
      )}

      {/* ✅ CARD CONTAINER (border + bg) */}
      <div
        className={[
          "h-full flex flex-col overflow-hidden rounded-xl border transition-shadow",
          darkMode
            ? "border-white/10 bg-gray-900/20"
            : "border-gray-200 bg-white",
          "shadow-sm group-hover:shadow-md",
        ].join(" ")}
      >
        {/* Cover */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <StoryCard
            title={title}
            excerpt={excerpt}
            image={imageSrc}
            variant="compact"
          />
        </div>

        {/* Footer (acum e în același container, cu border-top) */}
        <div
          className={[
            "px-2 py-1.5 sm:px-2 sm:py-2",
            "flex items-center justify-between gap-2",
            "text-[10px] sm:text-xs",
            "border-t",
            darkMode
              ? "border-white/10 text-gray-400 bg-gray-900/10"
              : "border-gray-200 text-gray-700 bg-gray-50",
          ].join(" ")}
        >
          <span className="font-medium truncate flex-1">{categoryLabel}</span>

          <div className="flex items-center gap-1 flex-shrink-0">
            <Star
              size={12}
              className={
                ratingMeta.avg !== null
                  ? "text-yellow-500 fill-yellow-500"
                  : darkMode
                  ? "text-gray-500"
                  : "text-gray-400"
              }
            />
            <span className="font-bold">{ratingText}</span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              ({votesText})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
