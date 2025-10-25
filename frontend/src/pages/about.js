import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { useTranslation } from "react-i18next";

function InfoCard({ title, icon, children, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      tabIndex={0}
      className={`group p-10 rounded-3xl shadow-xl bg-white dark:bg-gray-800 transition-transform duration-700 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {icon} {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function RoadmapItem({ year, title, description, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative pl-10 mb-16 transition-transform duration-700 transform ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
      }`}
    >
      <span className="absolute left-0 top-2 h-5 w-5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900 animate-pulse"></span>
      <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">
        {year}
      </p>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
        {title}
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function AboutUs() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const about = t("aboutPage", { returnObjects: true });

  const [heroVisible, setHeroVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 300);
    setTimeout(() => setParagraphVisible(true), 600);
    setTimeout(() => setCtaVisible(true), 900);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center">
        <h1
          className={`text-6xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 leading-tight transition-transform duration-700 transform ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }`}
        >
          {about.hero.title}
        </h1>
        <p
          className={`text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto transition-transform duration-700 transform ${
            paragraphVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {about.hero.description}
        </p>
      </section>

      {/* Info Cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {about.infoCards.map((card, idx) => (
          <InfoCard
            key={idx}
            title={card.title}
            icon={card.icon}
            delay={300 + idx * 300}
          >
            {card.description}
          </InfoCard>
        ))}
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100 transition-transform duration-700 transform ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {t("aboutPage.roadmapTitle", "Our Roadmap to the Future 🚀")}
          </h2>
          {about.roadmap.map((item, idx) => (
            <RoadmapItem
              key={idx}
              year={item.year}
              title={item.title}
              description={item.description}
              delay={300 + idx * 200}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h2
          className={`text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100 transition-transform duration-700 transform ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {about.cta.title}
        </h2>
        <p
          className={`text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto transition-transform duration-700 transform ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {about.cta.description}
        </p>
        <button
          onClick={() => navigate("/subscribe")}
          className={`px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-blue-400 text-white font-semibold text-lg rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 ${
            ctaVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {about.cta.button}
        </button>
      </section>
    </PageLayout>
  );
}
