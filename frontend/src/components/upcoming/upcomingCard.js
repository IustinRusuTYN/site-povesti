import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/themecontext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function UpcomingCard({
  title,
  date,
  icon,
  description,
  delay,
}) {
  const { darkMode } = useContext(ThemeContext);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      className={`
        group relative p-8 rounded-3xl overflow-hidden
        transition-all duration-500 ease-out
        transform hover:-translate-y-2
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg hover:shadow-2xl"
            : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-gray-900 shadow-md hover:shadow-xl"
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Pulse indicator */}
      <span
        className={`
        absolute -top-2 -left-2 w-4 h-4 rounded-full
        ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
        ${hovered ? "animate-ping" : ""}
      `}
      />

      {/* Gradient overlay pe hover */}
      <div
        className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-indigo-900/30 via-transparent to-indigo-900/30"
            : "bg-gradient-to-br from-indigo-200/50 via-transparent to-indigo-200/50"
        }
      `}
      />

      {/* Content */}
      <div className="relative">
        {/* Icon și Date */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`
            inline-flex items-center justify-center
            w-14 h-14 rounded-2xl
            transform transition-all duration-500
            ${hovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}
            ${
              darkMode
                ? "bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-lg shadow-indigo-500/50"
                : "bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md"
            }
          `}
          >
            <span className="text-2xl">{icon}</span>
          </div>

          {/* Date badge */}
          <div
            className={`
            px-3 py-1 rounded-full text-sm font-semibold
            ${
              darkMode
                ? "bg-gray-700 text-indigo-400"
                : "bg-indigo-100 text-indigo-700"
            }
          `}
          >
            {date}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
          text-xl md:text-2xl font-bold mb-3
          ${darkMode ? "text-indigo-400" : "text-gray-800"}
        `}
        >
          {title}
        </h3>

        {/* Decorative line */}
        <div
          className={`
          h-1 rounded-full mb-4
          transition-all duration-500
          ${hovered ? "w-20" : "w-12"}
          ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
        `}
        />

        {/* Description */}
        {description && (
          <p
            className={`
            text-base leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-700"}
          `}
          >
            {description}
          </p>
        )}
      </div>

      {/* Corner glow effect */}
      <div
        className={`
        absolute -bottom-8 -right-8 w-32 h-32
        rounded-full blur-2xl
        transition-all duration-500
        ${hovered ? "scale-150 opacity-100" : "scale-100 opacity-50"}
        ${darkMode ? "bg-indigo-600/30" : "bg-indigo-400/40"}
      `}
      />
    </div>
  );
}
