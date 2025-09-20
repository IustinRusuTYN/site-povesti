// src/pages/AboutUs.js
import React, { useContext } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";

function InfoCard({ title, icon, children }) {
  return (
    <div
      tabIndex={0}
      className="p-8 rounded-3xl shadow-lg transition-transform transform bg-white dark:bg-gray-800 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        {icon} {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-10 mb-12">
      <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900"></span>
      <p className="font-semibold text-blue-600 dark:text-blue-400">{year}</p>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>
    </div>
  );
}

export default function AboutUs() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            StoryTeller
          </span>
          , where every story comes alive. Discover our journey, our vision, and
          how we make storytelling accessible for everyone.
        </p>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <InfoCard title="Our Vision" icon="🌍">
          We believe in the power of storytelling to connect people across
          cultures, generations, and experiences. Every story is a bridge to
          imagination.
        </InfoCard>
        <InfoCard title="What We Do" icon="📚">
          We gather and share a diverse range of stories — from classic fairy
          tales to original narratives — to make reading fun and accessible for
          everyone.
        </InfoCard>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Our Journey
          </h2>
          <TimelineItem
            year="2018"
            title="Founded"
            description="StoryTeller was founded with the dream of connecting people through stories."
          />
          <TimelineItem
            year="2019"
            title="First Collection"
            description="Released our first curated collection of short stories for all ages."
          />
          <TimelineItem
            year="2021"
            title="Platform Launch"
            description="Launched our online platform, making stories accessible anytime, anywhere."
          />
          <TimelineItem
            year="2023"
            title="Global Community"
            description="Built a worldwide community of storytellers and readers."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Join Our Story
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Become a part of our storytelling community. Share your stories or
          enjoy tales from around the world.
        </p>
        <button className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500">
          Join Us
        </button>
      </section>
    </PageLayout>
  );
}
