// src/components/storycard.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import { getStoryImageSrc, publicImage } from "../utils/imageHelper";

function clamp(lines) {
  return `overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:${lines}]`;
}

function resolveImageSrc(image) {
  // acceptă: "/images/x.png", "images/x.png", "x.png", url http(s)
  // și acceptă și cazul când primește deja obiect story (nu ar trebui, dar e safe)
  if (!image) return "/images/placeholder.png";

  if (typeof image === "string") {
    return publicImage(image) || "/images/placeholder.png";
  }

  // dacă cineva pasează din greșeală story-ul întreg ca prop
  return getStoryImageSrc(image);
}

export default function StoryCard({
  title,
  excerpt,
  image,
  variant = "featured",
}) {
  const { darkMode } = useContext(ThemeContext);

  const safeTitle = typeof title === "string" ? title : "";
  const safeExcerpt = typeof excerpt === "string" ? excerpt : "";

  const imgSrc = resolveImageSrc(image);

  // ========== COMPACT VARIANT (AllStories) ==========
  if (variant === "compact") {
    return (
      <div
        className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="relative w-full h-24 sm:h-24 md:h-28 overflow-hidden bg-gray-200 dark:bg-gray-700 shrink-0">
          <img
            src={imgSrc}
            alt={safeTitle || "story"}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder.png";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div
          className={`p-2 sm:p-3 flex-1 min-h-0 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <h3
            className={[
              "font-bold text-[11px] sm:text-sm leading-tight transition-colors",
              "group-hover:text-purple-500",
              clamp(2),
            ].join(" ")}
            title={safeTitle}
          >
            {safeTitle}
          </h3>

          <p
            className={[
              "mt-1 text-[10px] sm:text-xs leading-snug",
              darkMode ? "text-gray-400" : "text-gray-600",
              "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]",
              "[-webkit-line-clamp:4] sm:[-webkit-line-clamp:4]",
            ].join(" ")}
            title={safeExcerpt}
          >
            {safeExcerpt}
          </p>
        </div>
      </div>
    );
  }

  // ========== FEATURED VARIANT (Carousel) ==========
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="relative w-full h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={imgSrc}
          alt={safeTitle || "story"}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.png";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className={[
              "text-white font-bold text-lg leading-tight",
              clamp(2),
            ].join(" ")}
            title={safeTitle}
          >
            {safeTitle}
          </h3>
        </div>
      </div>

      <div
        className={`p-4 flex-1 flex flex-col ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <p
          className={[
            "text-sm flex-1",
            darkMode ? "text-gray-300" : "text-gray-600",
            clamp(3),
          ].join(" ")}
          title={safeExcerpt}
        >
          {safeExcerpt}
        </p>
      </div>
    </div>
  );
}
