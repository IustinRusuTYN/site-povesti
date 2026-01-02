// src/components/home/adfreesection.js
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";

export default function AdFreeSection() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("ad-free-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Benefits cu fallback sigur
  const benefits = t("adFree.benefits", { returnObjects: true });
  const benefitsList = Array.isArray(benefits)
    ? benefits
    : ["Zero reclame", "Viteză maximă", "Privacy garantat"];

  return (
    <section id="ad-free-section" className="py-12 md:py-16 px-4 md:px-6">
      <div
        className={`
          relative max-w-screen-xl mx-auto rounded-3xl overflow-hidden
          py-12 md:py-16 px-6 md:px-12 lg:px-16
          transition-all duration-300
          ${
            darkMode
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg"
              : "bg-gradient-to-r from-indigo-100 via-white to-indigo-200 shadow-md"
          }
        `}
      >
        {/* Decorative gradient orbs */}
        <div
          className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? "bg-indigo-900/30" : "bg-indigo-300/40"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? "bg-indigo-800/30" : "bg-indigo-400/40"
          }`}
        />

        <div className="relative z-10 text-center">
          {/* Icon with animation */}
          <div
            className={`
              inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl
              transition-all duration-1000
              ${
                visible
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-50 rotate-45"
              }
              ${
                darkMode
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                  : "bg-gradient-to-br from-yellow-300 to-orange-400"
              }
            `}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
              backdrop-blur-md
              transition-all duration-1000 delay-200
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              ${
                darkMode
                  ? "bg-gray-900/40 border border-indigo-500/40"
                  : "bg-white/60 border border-indigo-400/40"
              }
            `}
          >
            <CheckCircle2
              className={`w-4 h-4 ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            />
            <span
              className={`text-xs md:text-sm font-semibold ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              {t("adFree.badge")}
            </span>
          </div>

          {/* Title */}
          <h2
            className={`
              text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4
              leading-tight max-w-3xl mx-auto
              transition-all duration-1000 delay-300
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              ${darkMode ? "text-indigo-400" : "text-gray-800"}
            `}
          >
            {t("adFree.title")}
          </h2>

          {/* Subtitle */}
          <p
            className={`
              text-base md:text-lg lg:text-xl mb-8
              leading-relaxed max-w-2xl mx-auto
              transition-all duration-1000 delay-400
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              ${darkMode ? "text-gray-300" : "text-gray-700"}
            `}
          >
            {t("adFree.description")}
          </p>

          {/* Benefits List */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-4xl mx-auto
              transition-all duration-1000 delay-500
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {benefitsList.map((benefit, idx) => (
              <div
                key={idx}
                className={`
                  flex items-center gap-3 p-4 rounded-xl
                  transition-all duration-300 hover:scale-105
                  ${
                    darkMode
                      ? "bg-gray-800/50 border border-gray-700"
                      : "bg-white/70 border border-indigo-200"
                  }
                `}
              >
                <CheckCircle2
                  className={`w-5 h-5 shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                />
                <span
                  className={`text-sm md:text-base font-medium text-left ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`
              transition-all duration-1000 delay-600
              ${
                visible
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
              onClick={() => navigate("/subscribe")}
            >
              {t("adFree.button")}
            </Button>

            {/* Trust signal */}
            <p
              className={`mt-4 text-xs md:text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("adFree.trust")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
