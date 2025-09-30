// src/components/home/herosection.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import girlReading from "../../assets/images/girl-reading.png";

/**
 * herosection
 *
 * Small, focused component for the homepage hero area.
 * - Shows the hero image + adaptive overlay (dark/light).
 * - Renders title, subtitle and a CTA button that navigates to /allstories.
 *
 * Usage:
 * import Herosection from "../components/home/herosection";
 * <Herosection />
 *
 * Notes:
 * - Kept purely presentational and uses ThemeContext for dark-mode styling.
 * - Button component is reused from components/buttons/Button.js
 */
export default function Herosection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <img
        src={girlReading}
        alt="Reading girl"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay adaptiv: folosește darkMode pentru a regla opacitatea */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-gray-700 bg-opacity-50" : "bg-black bg-opacity-40"
        }`}
      />
      <div className="relative z-10 flex flex-col items-center justify-start text-center h-full px-4 pt-80">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Read Imaginary Stories
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Explore a collection of romance, sci-fi and more.
        </p>
        <Button variant="secondary" onClick={() => navigate("/allstories")}>
          Browse Stories
        </Button>
      </div>
    </section>
  );
}
