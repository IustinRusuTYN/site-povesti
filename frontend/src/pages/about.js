import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { useTranslation } from "react-i18next";
import Button from "../components/buttons/Button";
import { ArrowRight, Sparkles } from "lucide-react";

// Hook pentru animații la scroll
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}

function InfoCard({ title, icon, children, delay, index }) {
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
        {/* Icon cu animație */}
        <div
          className={`
          inline-flex items-center justify-center
          w-16 h-16 mb-6 rounded-2xl
          transform transition-all duration-500
          ${hovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}
          ${
            darkMode
              ? "bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-lg shadow-indigo-500/50"
              : "bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md"
          }
        `}
        >
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Title */}
        <h2
          className={`
          text-2xl font-bold mb-4
          ${darkMode ? "text-indigo-400" : "text-gray-800"}
        `}
        >
          {title}
        </h2>

        {/* Decorative line */}
        <div
          className={`
          h-1 rounded-full mb-4
          transition-all duration-500
          ${hovered ? "w-24" : "w-16"}
          ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
        `}
        />

        {/* Description */}
        <p
          className={`
          text-lg leading-relaxed
          ${darkMode ? "text-gray-300" : "text-gray-700"}
        `}
        >
          {children}
        </p>
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

function RoadmapItem({ year, title, description, delay, index, isLast }) {
  const { darkMode } = useContext(ThemeContext);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [hovered, setHovered] = useState(false);

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
        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Dot */}
          <div
            className={`
            relative z-10 flex items-center justify-center
            h-14 w-14 rounded-full 
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
            {/* Pulse effect pe hover */}
            <span
              className={`
              absolute inset-0 rounded-full
              transition-opacity duration-500
              ${hovered ? "animate-ping opacity-75" : "opacity-0"}
              ${darkMode ? "bg-indigo-500" : "bg-indigo-400"}
            `}
            />
            <span className="relative text-white font-bold text-sm z-10">
              {year}
            </span>
          </div>

          {/* Connecting line */}
          {!isLast && (
            <div
              className={`
              flex-1 mt-2 rounded-full
              transition-all duration-500
              ${hovered ? "w-2 opacity-50" : "w-1 opacity-30"}
              ${darkMode ? "bg-indigo-600" : "bg-indigo-500"}
            `}
              style={{ minHeight: "80px" }}
            />
          )}
        </div>

        {/* Content Card */}
        <div
          className={`
          flex-1 pb-12
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

            {/* Background glow */}
            <div
              className={`
              absolute inset-0 opacity-0
              transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
              ${
                darkMode
                  ? "bg-gradient-to-br from-indigo-900/30 via-transparent to-indigo-900/30"
                  : "bg-gradient-to-br from-indigo-200/50 via-transparent to-indigo-200/50"
              }
            `}
            />

            {/* Content */}
            <div className="relative">
              <h3
                className={`
                text-2xl font-bold mb-3
                ${darkMode ? "text-indigo-400" : "text-gray-800"}
              `}
              >
                {title}
              </h3>

              <div
                className={`
                h-1 rounded-full mb-4
                transition-all duration-500
                ${hovered ? "w-20" : "w-12"}
                ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
              `}
              />

              <p
                className={`
                text-lg leading-relaxed
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

export default function AboutUs() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const about = t("aboutPage", { returnObjects: true });

  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section
        className={`
        relative py-24 md:py-32 px-4 md:px-6 overflow-hidden
        transition-colors duration-300
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
        }
      `}
      >
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-blob ${
            darkMode ? "bg-indigo-900/40" : "bg-indigo-300/50"
          }`}
        />
        <div
          className={`absolute top-40 right-10 w-72 h-72 rounded-full blur-3xl animate-blob animation-delay-2000 ${
            darkMode ? "bg-indigo-800/40" : "bg-indigo-400/50"
          }`}
        />
        <div
          className={`absolute -bottom-8 left-1/2 w-72 h-72 rounded-full blur-3xl animate-blob animation-delay-4000 ${
            darkMode ? "bg-indigo-700/40" : "bg-indigo-500/40"
          }`}
        />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8
            transition-all duration-1000
            ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            ${
              darkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-700 border border-indigo-600/50"
                : "bg-gradient-to-r from-white to-indigo-50 border border-indigo-300"
            }
          `}
          >
            <Sparkles
              className={`w-5 h-5 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              {about.hero?.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`
              text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6
              leading-tight
              transition-all duration-1000 delay-200
              ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }
              ${darkMode ? "text-indigo-400" : "text-gray-800"}
            `}
          >
            {about.hero?.title}
          </h1>

          {/* Description */}
          <p
            className={`
              text-lg md:text-xl lg:text-2xl
              max-w-4xl mx-auto leading-relaxed mb-10
              transition-all duration-1000 delay-400
              ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              ${darkMode ? "text-gray-300" : "text-gray-700"}
            `}
          >
            {about.hero?.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`
            flex flex-col sm:flex-row gap-4 justify-center items-center
            transition-all duration-1000 delay-600
            ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate("/subscribe")}
            >
              {about.hero?.primaryButton}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("info-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {about.hero?.secondaryButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section
        id="info-section"
        className={`
        py-20 px-4 md:px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-800/50" : "bg-indigo-50/50"}
      `}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`
              text-4xl md:text-5xl font-extrabold mb-4
              ${darkMode ? "text-indigo-400" : "text-gray-800"}
            `}
            >
              {about.infoCardsTitle}
            </h2>
            <div
              className={`
              w-24 h-1 mx-auto rounded-full
              ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
            `}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {about.infoCards?.map((card, idx) => (
              <InfoCard
                key={idx}
                title={card.title}
                icon={card.icon}
                delay={idx * 150}
                index={idx}
              >
                {card.description}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        className={`
        py-20 px-4 md:px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-900" : "bg-white"}
      `}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className={`
              text-4xl md:text-5xl font-extrabold mb-4
              ${darkMode ? "text-indigo-400" : "text-gray-800"}
            `}
            >
              {about.roadmapTitle}
            </h2>
            <div
              className={`
              w-24 h-1 mx-auto rounded-full
              ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
            `}
            />
          </div>

          <div className="space-y-0">
            {about.roadmap?.map((item, idx) => (
              <RoadmapItem
                key={idx}
                year={item.year}
                title={item.title}
                description={item.description}
                delay={idx * 150}
                index={idx}
                isLast={idx === about.roadmap.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`
        relative py-20 px-4 md:px-6 overflow-hidden rounded-3xl mx-4 my-8
        transition-colors duration-300
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg"
            : "bg-gradient-to-r from-indigo-100 via-white to-indigo-200 shadow-md"
        }
      `}
      >
        {/* Animated orbs */}
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-blob ${
            darkMode ? "bg-indigo-800/30" : "bg-indigo-300/40"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-2000 ${
            darkMode ? "bg-indigo-700/30" : "bg-indigo-400/40"
          }`}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`text-6xl mb-6 transition-transform duration-500 hover:scale-110 ${
              darkMode ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            ✨
          </div>

          <h2
            className={`
            text-4xl md:text-5xl font-bold mb-6
            ${darkMode ? "text-indigo-400" : "text-gray-800"}
          `}
          >
            {about.cta?.title}
          </h2>

          <p
            className={`
            text-xl mb-10 max-w-3xl mx-auto leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-700"}
          `}
          >
            {about.cta?.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
              onClick={() => navigate("/subscribe")}
            >
              {about.cta?.button}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              {about.cta?.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
