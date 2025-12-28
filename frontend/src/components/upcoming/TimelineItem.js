import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/themecontext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Calendar } from "lucide-react";

export default function TimelineItem({
  year,
  quarter,
  title,
  description,
  status,
  delay,
}) {
  const { darkMode } = useContext(ThemeContext);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [hovered, setHovered] = useState(false);

  const statusConfig = {
    planned: {
      label: "Planificat",
      labelEn: "Planned",
      labelFr: "Planifié",
      color: darkMode
        ? "bg-gray-600 text-gray-300"
        : "bg-gray-200 text-gray-700",
    },
    inProgress: {
      label: "În Curs",
      labelEn: "In Progress",
      labelFr: "En Cours",
      color: darkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white",
    },
    upcoming: {
      label: "În Curând",
      labelEn: "Upcoming",
      labelFr: "À Venir",
      color: darkMode ? "bg-yellow-600 text-white" : "bg-yellow-500 text-white",
    },
  };

  const config = statusConfig[status] || statusConfig.planned;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-6">
        {/* Timeline dot */}
        <div className="relative flex flex-col items-center">
          <div
            className={`
            relative z-10 flex items-center justify-center
            h-12 w-12 rounded-full 
            shadow-lg ring-4 
            transition-all duration-500
            ${hovered ? "scale-125 shadow-2xl" : "scale-100"}
            ${
              darkMode
                ? "bg-gradient-to-br from-indigo-600 to-indigo-800 ring-gray-900 shadow-indigo-500/50"
                : "bg-gradient-to-br from-indigo-500 to-indigo-600 ring-white shadow-indigo-300"
            }
          `}
          >
            <span
              className={`
              absolute inset-0 rounded-full
              transition-opacity duration-500
              ${
                hovered && status === "inProgress"
                  ? "animate-ping opacity-75"
                  : "opacity-0"
              }
              ${darkMode ? "bg-indigo-500" : "bg-indigo-400"}
            `}
            />
            <Calendar className="w-5 h-5 text-white relative z-10" />
          </div>

          <div
            className={`
            w-1 flex-1 mt-2 rounded-full
            transition-all duration-500
            ${darkMode ? "bg-indigo-600/30" : "bg-indigo-500/30"}
          `}
            style={{ minHeight: "60px" }}
          />
        </div>

        {/* Content */}
        <div
          className={`
          flex-1 pb-8
          transform transition-all duration-500
          ${hovered ? "translate-x-2" : "translate-x-0"}
        `}
        >
          <div
            className={`
            relative p-6 rounded-3xl overflow-hidden
            transition-all duration-500
            ${
              darkMode
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl"
                : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200 shadow-md hover:shadow-xl"
            }
          `}
          >
            {/* Top gradient border */}
            <div
              className={`
              absolute top-0 left-0 right-0 h-1
              transform origin-left transition-transform duration-500
              ${hovered ? "scale-x-100" : "scale-x-0"}
              ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
            `}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`
                  text-sm font-bold
                  ${darkMode ? "text-indigo-400" : "text-indigo-600"}
                `}
                >
                  {quarter} {year}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${config.color}`}
                >
                  {config.label}
                </span>
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

              {/* Line */}
              <div
                className={`
                h-1 rounded-full mb-4
                transition-all duration-500
                ${hovered ? "w-16" : "w-10"}
                ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
              `}
              />

              {/* Description */}
              <p
                className={`
                text-base leading-relaxed
                ${darkMode ? "text-gray-300" : "text-gray-700"}
              `}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
