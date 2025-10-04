// src/pages/upcoming.js
import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/pagelayout";
import UpcomingCard from "../components/upcoming/upcomingCard";
import UpcomingCTA from "../components/upcoming/upcomingCTA";
import { FaBookOpen, FaCalendarAlt, FaStar, FaUsers } from "react-icons/fa";

const upcomingItems = [
  {
    title: "✨ New Story: The Magic Forest",
    date: "Releases on 25th August 2025",
    icon: <FaBookOpen className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "🎤 Live Event: Storytelling Night",
    date: "Join us on 1st September 2025",
    icon: <FaUsers className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "📚 New Collection: Adventure Tales",
    date: "Coming soon!",
    icon: <FaStar className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "🖋️ Exclusive Author Interview",
    date: "1st October 2025",
    icon: <FaUsers className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "🧩 Interactive Story Workshop",
    date: "15th October 2025",
    icon: <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "🎄 Holiday Story Collection",
    date: "December 2025",
    icon: <FaBookOpen className="text-purple-600 dark:text-purple-400" />,
  },
];

export default function Upcoming() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          Coming Soon 🌟
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Fresh stories, thrilling events, and exclusive collections are on the
          horizon. Be the first to experience the magic.
        </motion.p>
      </section>

      {/* Cards Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {upcomingItems.map((item, idx) => (
            <UpcomingCard
              key={idx}
              title={item.title}
              date={item.date}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <UpcomingCTA />
    </PageLayout>
  );
}
