// src/components/upcoming/upcomingCTA.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UpcomingCTA() {
  return (
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
  );
}
