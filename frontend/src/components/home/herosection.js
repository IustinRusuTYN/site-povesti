// src/components/home/herosection.js
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import girlReading from "../../assets/images/girl-reading.png";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div
        className={`
          relative max-w-screen-xl mx-auto rounded-3xl overflow-hidden
          h-[500px] md:h-[600px] lg:h-[650px]
          transition-colors duration-300
          ${darkMode ? "shadow-lg" : "shadow-md"}
        `}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={girlReading}
            alt={t("hero.alt")}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Fade intens de la toate extremitățile (vignette puternic) */}
        <div
          className={`
            absolute inset-0
            ${
              darkMode
                ? `bg-[radial-gradient(ellipse_at_center,transparent_65%,transparent_75%,rgba(17,24,39,0.4)_90%,rgba(17,24,39,0.9)_99%)]`
                : `bg-[radial-gradient(ellipse_at_center,transparent_65%,transparent_75%,rgba(255,255,255,0.5)_90%,rgba(255,255,255,0.95)_99%)]`
            }
          `}
        />

        {/* Gradient overlay pentru text (jos) */}
        <div
          className={`
            absolute inset-0 transition-colors duration-300
            ${
              darkMode
                ? "bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"
                : "bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"
            }
          `}
        />

        {/* Content (text + butoane peste imagine) */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16">
          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8
              backdrop-blur-md
              transition-all duration-1000
              ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              ${
                darkMode
                  ? "bg-gray-900/40 border border-indigo-500/40"
                  : "bg-white/40 border border-indigo-400/40"
              }
            `}
          >
            <Sparkles
              className={`w-4 h-4 md:w-5 md:h-5 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <span
              className={`text-xs md:text-sm font-semibold ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              {t("hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`
              text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6
              leading-tight max-w-4xl
              transition-all duration-1000 delay-200
              ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }
              text-white drop-shadow-2xl
            `}
          >
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-base md:text-lg lg:text-xl mb-8 md:mb-10
              leading-relaxed max-w-2xl
              transition-all duration-1000 delay-400
              ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              ${darkMode ? "text-gray-200" : "text-white drop-shadow-lg"}
            `}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4
              transition-all duration-1000 delay-600
              ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="transition-transform duration-300 hover:scale-105"
              onClick={() => navigate("/allstories")}
            >
              {t("hero.cta")}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`
                backdrop-blur-md transition-transform duration-300 hover:scale-105
                ${
                  darkMode
                    ? "border-white/60 text-white hover:bg-white/10"
                    : "border-white/80 text-white hover:bg-white/20"
                }
              `}
              onClick={() => navigate("/about")}
            >
              {t("hero.secondaryCta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
