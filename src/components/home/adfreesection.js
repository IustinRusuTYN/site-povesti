// src/components/home/adfreesection.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import { FaRegSmileBeam } from "react-icons/fa";
import Button from "../buttons/Button";

export default function AdFreeSection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-16 px-6 text-center max-w-screen-lg mx-auto rounded-3xl transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg"
          : "bg-gradient-to-r from-indigo-100 via-white to-indigo-200 text-gray-900 shadow-md"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <FaRegSmileBeam
          className={`text-6xl transition-transform duration-500 hover:scale-110 ${
            darkMode ? "text-yellow-400" : "text-yellow-500"
          }`}
        />
        <h2
          className={`text-3xl md:text-4xl font-extrabold mb-2 transition-colors duration-300 ${
            darkMode ? "text-indigo-600" : "text-gray-800"
          }`}
        >
          Enjoy an Ad-Free Experience!
        </h2>
        <p className="mb-6 max-w-xl text-lg md:text-xl leading-relaxed">
          Unlock uninterrupted reading, exclusive content, and a smoother
          experience by upgrading to premium. Say goodbye to ads and hello to
          more stories!
        </p>
        <Button
          variant="primary"
          className="px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/subscribe")}
        >
          Go Ad-Free Now
        </Button>
      </div>
    </section>
  );
}
