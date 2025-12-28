import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { useTranslation } from "react-i18next";
import Button from "../components/buttons/Button";
import { ArrowRight, Rocket } from "lucide-react";
import UpcomingCard from "../components/upcoming/UpcomingCard";
import TimelineItem from "../components/upcoming/TimelineItem";

export default function Upcoming() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const upcoming = t("upcomingPage", { returnObjects: true });

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
            <Rocket
              className={`w-5 h-5 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              {upcoming.hero?.badge}
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
            {upcoming.hero?.title}
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
            {upcoming.hero?.description}
          </p>

          {/* CTA Button */}
          <div
            className={`
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
              onClick={() => {
                document
                  .getElementById("features-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {upcoming.hero?.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features-section"
        className={`
        py-20 px-4 md:px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-800/50" : "bg-indigo-50/50"}
      `}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`
              text-4xl md:text-5xl font-extrabold mb-4
              ${darkMode ? "text-indigo-400" : "text-gray-800"}
            `}
            >
              {upcoming.featuresTitle}
            </h2>
            <div
              className={`
              w-24 h-1 mx-auto rounded-full
              ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
            `}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.features?.map((feature, idx) => (
              <UpcomingCard
                key={idx}
                title={feature.title}
                date={feature.date}
                icon={feature.icon}
                description={feature.description}
                delay={idx * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              {upcoming.timelineTitle}
            </h2>
            <div
              className={`
              w-24 h-1 mx-auto rounded-full
              ${darkMode ? "bg-indigo-500" : "bg-indigo-600"}
            `}
            />
          </div>

          <div className="space-y-0">
            {upcoming.timeline?.map((item, idx) => (
              <TimelineItem
                key={idx}
                year={item.year}
                quarter={item.quarter}
                title={item.title}
                description={item.description}
                status={item.status}
                delay={idx * 150}
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
            🚀
          </div>

          <h2
            className={`
            text-4xl md:text-5xl font-bold mb-6
            ${darkMode ? "text-indigo-400" : "text-gray-800"}
          `}
          >
            {upcoming.cta?.title}
          </h2>

          <p
            className={`
            text-xl mb-10 max-w-3xl mx-auto leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-700"}
          `}
          >
            {upcoming.cta?.description}
          </p>

          <Button
            variant="primary"
            size="lg"
            className="transition-transform duration-300 hover:scale-105"
            onClick={() => navigate("/subscribe")}
          >
            {upcoming.cta?.button}
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
