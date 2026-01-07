// src/components/story/storyheader.js
import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import { getStoryImageSrc } from "../../utils/imageHelper";

function clamp01(x) {
  if (x < 0) return 0;
  if (x > 1) return 1;
  return x;
}

function Star({ fillPercent, clipId }) {
  const p = Math.max(0, Math.min(100, Number(fillPercent) || 0));
  const width = (24 * p) / 100;

  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400"
      />

      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={width} height="24" />
        </clipPath>
      </defs>

      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="currentColor"
        clipPath={`url(#${clipId})`}
        className="text-yellow-400"
      />
    </svg>
  );
}

function getFillForStar(avg, starIndex1to5) {
  const a = Number(avg) || 0;
  const filled = clamp01(a - (starIndex1to5 - 1)); // 0..1
  return filled * 100; // 0..100
}

export default function StoryHeader({
  story,
  darkMode,
  rating,
  votes,
  myRating,
  ratingLoading,
  isAuthenticated,
  onRate,
}) {
  const { t } = useTranslation();
  const uid = useId();

  const alreadyRated = myRating !== null && myRating !== undefined;
  const canRate = isAuthenticated && !alreadyRated && !ratingLoading;

  const imgSrc = getStoryImageSrc(story);
  const avg = Number(rating) || 0;

  const voteAria = (v) =>
    t("rating.voteAria", { value: v, defaultValue: `Vote ${v} out of 5` });
  // ^ dacă nu ai cheia rating.voteAria, va folosi defaultValue

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={imgSrc}
        alt={story?.title || "story"}
        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        onError={(e) => {
          e.currentTarget.src = "/images/placeholder.png";
        }}
      />

      <div className="flex-1">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {story?.title}
        </h1>

        {story?.category && (
          <span
            className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-gray-700 text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {story.category}
          </span>
        )}

        <p
          className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {story?.excerpt}
        </p>

        <div className="mt-5 flex flex-col gap-2">
          {/* Summary */}
          <div className="flex items-center gap-2">
            <span
              className={`${
                darkMode ? "text-gray-100" : "text-gray-800"
              } font-medium text-sm`}
            >
              {t("rating.averageLabel")}
            </span>

            <span className="text-yellow-400 text-sm font-bold">
              {ratingLoading ? "..." : votes > 0 ? `${avg.toFixed(1)}★` : "N/A"}
            </span>

            {!ratingLoading && (
              <span
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } text-sm`}
              >
                {t("rating.votesLabel", { count: votes || 0 })}
              </span>
            )}
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((v) => {
              const fillPercent = alreadyRated
                ? v <= myRating
                  ? 100
                  : 0
                : getFillForStar(avg, v);

              const title = !isAuthenticated
                ? t("rating.loginToVote")
                : alreadyRated
                ? t("rating.alreadyRated")
                : `${v}/5`;

              return (
                <button
                  key={v}
                  type="button"
                  disabled={!canRate}
                  onClick={() => onRate?.(v)}
                  className={[
                    "rounded-md p-1 transition",
                    !canRate
                      ? "cursor-not-allowed opacity-60"
                      : "hover:scale-105",
                  ].join(" ")}
                  aria-label={voteAria(v)}
                  title={title}
                >
                  <Star fillPercent={fillPercent} clipId={`${uid}-clip-${v}`} />
                </button>
              );
            })}
          </div>

          {/* Status text */}
          <div
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm`}
          >
            {!isAuthenticated && t("rating.loginToVote")}
            {isAuthenticated && ratingLoading && t("rating.loading")}
            {isAuthenticated &&
              !ratingLoading &&
              alreadyRated &&
              t("rating.yourVoteSaved", { value: myRating })}
            {isAuthenticated &&
              !ratingLoading &&
              !alreadyRated &&
              t("rating.oneVoteOnly")}
          </div>
        </div>
      </div>
    </div>
  );
}
