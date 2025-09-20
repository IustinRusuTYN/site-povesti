// src/pages/Upcoming.js
import React, { useContext } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { Link } from "react-router-dom"; // adaugă la importuri

const upcomingItems = [
  {
    title: "New Story: The Magic Forest",
    date: "Releases on 25th August 2025",
  },
  {
    title: "Live Event: Storytelling Night",
    date: "Join us on 1st September 2025",
  },
  { title: "New Collection: Adventure Tales", date: "Coming soon!" },
  { title: "Exclusive Author Interview", date: "1st October 2025" },
  { title: "Interactive Story Workshop", date: "15th October 2025" },
  { title: "Holiday Story Collection", date: "December 2025" },
];

function UpcomingCard({ title, date }) {
  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-300">{date}</p>
      <span className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></span>
    </motion.div>
  );
}

export default function Upcoming() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          Upcoming Stories & Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Stay tuned! Exciting stories, events, and exclusive collections are
          coming soon. Don’t miss out!
        </motion.p>
      </section>

      {/* Cards Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingItems.map((item, idx) => (
            <UpcomingCard key={idx} title={item.title} date={item.date} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Want Early Access?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our subscribe page to get access to upcoming stories, events,
            and exclusive content.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/subscribe"
              className="px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-500"
            >
              Go to Subscribe
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
