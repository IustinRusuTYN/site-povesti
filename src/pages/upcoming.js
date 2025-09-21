import React, { useContext } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { Link } from "react-router-dom";
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

function UpcomingCard({ title, date, icon }) {
  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-500"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-500 dark:text-gray-300">{date}</p>
      <span className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full animate-ping"></span>
    </motion.div>
  );
}

export default function Upcoming() {
  const { darkMode } = useContext(ThemeContext);

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
      <section className="py-24 px-6 text-center relative bg-gradient-to-r from-purple-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Want Early Access? 🚀
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Subscribe now and unlock early access to stories, live events, and
            exclusive behind-the-scenes content.
          </p>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/subscribe"
              className="px-12 py-5 bg-purple-600 dark:bg-purple-500 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-500"
            >
              Go to Subscribe
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
