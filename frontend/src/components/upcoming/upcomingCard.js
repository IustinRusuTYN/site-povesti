// src/components/upcoming/upcomingCard.js
import React from "react";
import { motion } from "framer-motion";

export default function UpcomingCard({ title, date, icon }) {
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
