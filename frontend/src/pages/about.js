import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";

function InfoCard({ title, icon, children }) {
  return (
    <div
      tabIndex={0}
      className="group p-10 rounded-3xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 animate-fadeInUp"
    >
      <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {icon} {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function RoadmapItem({ year, title, description }) {
  return (
    <div className="relative pl-10 mb-16 animate-slideInLeft">
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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 leading-tight animate-fadeInDown">
          Every Story Shapes a World 🌌
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto animate-fadeInUp">
          At{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            StoryTeller
          </span>
          , we believe that words carry magic. Stories are not just tales — they
          are sparks of inspiration, bridges between cultures, and voices that
          connect hearts across the globe.
        </p>
      </section>

      {/* Info Cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        <InfoCard title="Our Vision" icon="✨">
          To light up imaginations and inspire change through the art of
          storytelling. We dream of a world where every voice finds a listener
          and every story leaves a trace of hope.
        </InfoCard>
        <InfoCard title="Our Mission" icon="🚀">
          To bring together readers and storytellers, creating a vibrant space
          where stories spark curiosity, inspire creativity, and nurture a
          global community of dreamers.
        </InfoCard>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100 animate-fadeInUp">
            Our Roadmap to the Future 🚀
          </h2>
          <RoadmapItem
            year="2024"
            title="Launch & Foundation"
            description="We open the doors to StoryTeller — a new home for stories, where readers and writers meet to inspire and be inspired."
          />
          <RoadmapItem
            year="2025"
            title="Community Growth"
            description="We aim to grow a vibrant global community of storytellers, offering interactive features, live readings, and collaborations."
          />
          <RoadmapItem
            year="2026"
            title="Mobile Experience"
            description="Bringing the magic of stories everywhere with our dedicated mobile app — making storytelling a part of daily life."
          />
          <RoadmapItem
            year="2027"
            title="Global Impact"
            description="Our vision is to empower millions of voices across the world, turning StoryTeller into the go-to platform for creativity and inspiration."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100 animate-fadeInDown">
          Be Part of the Story ✨
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fadeInUp">
          Stories are stronger when shared. Join us in building a world filled
          with imagination, courage, and inspiration — one story at a time.
        </p>
        <button
          onClick={() => navigate("/subscribe")}
          className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-blue-400 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 animate-bounce"
        >
          Go to Subscribe
        </button>
      </section>
    </PageLayout>
  );
}
