// src/components/home/herosection.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import girlReading from "../../assets/images/girl-reading.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={girlReading}
        alt="Reading girl"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Overlay adaptiv */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          darkMode
            ? "bg-gray-800 bg-opacity-50"
            : "bg-gradient-to-t from-black/50 via-black/25 to-transparent"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-6xl font-extrabold mb-4 ${
            darkMode ? "text-indigo-100" : "text-indigo-100"
          }`}
        >
          Read Imaginary Stories
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg md:text-2xl mb-6 max-w-xl text-gray-100 dark:text-gray-300"
        >
          Explore a collection of romance, sci-fi, fantasy, and more.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105"
            onClick={() => navigate("/allstories")}
          >
            Browse Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
