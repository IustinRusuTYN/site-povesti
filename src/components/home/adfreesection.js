// src/components/home/adfreesection.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";

/**
 * adfreesection
 *
 * Small CTA section encouraging users to subscribe to an ad-free experience.
 *
 * Usage:
 * import Adfreesection from "../components/home/adfreesection";
 * <Adfreesection />
 *
 * Notes:
 * - Purely presentational, uses ThemeContext to style dark/light variants.
 * - Navigates to /subscribe when CTA is clicked.
 */
export default function Adfreesection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-10 px-4 text-center max-w-screen-lg mx-auto rounded-xl ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Go Ad-Free with a Subscription
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Enjoy uninterrupted reading by upgrading to our premium, ad-free
        experience.
      </p>
      <Button variant="primary" onClick={() => navigate("/subscribe")}>
        Subscribe Now
      </Button>
    </section>
  );
}
