// src/components/home/featuredstoriescarousel.js
import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen, Star, ArrowRight, Sparkles } from "lucide-react";
import Button from "../buttons/Button";
import "swiper/css";
import "swiper/css/effect-coverflow";

import stories from "../../data/stories";
import { ThemeContext } from "../../context/themecontext";

export default function FeaturedStoriesCarousel() {
  const { darkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [currentStories, setCurrentStories] = useState(stories);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lang = i18n.language;
    const translated = stories.map((story) => ({
      ...story,
      title: story.translations?.[lang]?.title || story.title,
      excerpt: story.translations?.[lang]?.excerpt || story.excerpt,
    }));
    setCurrentStories(translated);
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("featured-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return null;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <section id="featured-section" className="py-12 md:py-16 px-4 md:px-6">
      <div
        className={`
          relative max-w-screen-xl mx-auto rounded-3xl overflow-hidden
          py-12 md:py-16 px-6 md:px-12
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
          className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? "bg-indigo-900/30" : "bg-indigo-300/40"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? "bg-indigo-800/30" : "bg-indigo-400/40"
          }`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Icon */}
            <div
              className={`
                inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl
                transition-all duration-1000
                ${
                  visible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 rotate-45"
                }
                ${
                  darkMode
                    ? "bg-gradient-to-br from-indigo-600 to-indigo-800"
                    : "bg-gradient-to-br from-indigo-500 to-indigo-600"
                }
              `}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>

            {/* Badge */}
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4
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
              <Sparkles
                className={`w-4 h-4 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span
                className={`text-xs md:text-sm font-semibold ${
                  darkMode ? "text-indigo-300" : "text-indigo-700"
                }`}
              >
                {t("featuredBadge")}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`
                text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3
                transition-all duration-1000 delay-300
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                ${darkMode ? "text-indigo-400" : "text-gray-800"}
              `}
            >
              {t("featuredStories")}
            </h3>

            {/* Subtitle */}
            <p
              className={`
                text-base md:text-lg
                transition-all duration-1000 delay-400
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                ${darkMode ? "text-gray-300" : "text-gray-700"}
              `}
            >
              {t("discoverAmazingStories")}
            </p>
          </div>

          {/* 3D Carousel */}
          <div
            className={`
              transition-all duration-1000 delay-500
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="!pb-8"
            >
              {currentStories.map((story) => {
                const avgRating = getAverageRating(story.ratings);

                return (
                  <SwiperSlide key={story.id}>
                    <Link to={`/story/${story.id}`} className="group block">
                      {/* Card */}
                      <div
                        className={`
                          relative rounded-2xl overflow-hidden shadow-xl
                          transition-all duration-300
                          group-hover:scale-105 group-hover:shadow-2xl
                          ${darkMode ? "bg-gray-800" : "bg-white"}
                        `}
                      >
                        {/* Image */}
                        <div className="relative w-full h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                          {story.image ? (
                            <img
                              src={story.image}
                              alt={story.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <span className="text-6xl">📖</span>
                            </div>
                          )}

                          {/* Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-white font-bold text-lg mb-1 line-clamp-2">
                              {story.title}
                            </h4>
                            <p className="text-gray-300 text-sm line-clamp-2 mb-2">
                              {story.excerpt}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                              <span className="font-medium">
                                {story.category}
                              </span>
                              {avgRating && (
                                <div className="flex items-center gap-1">
                                  <Star
                                    size={12}
                                    className="text-yellow-400 fill-yellow-400"
                                  />
                                  <span className="text-yellow-400 font-bold">
                                    {avgRating}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* CTA Button */}
          <div
            className={`
              text-center mt-8
              transition-all duration-1000 delay-700
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
              onClick={() => navigate("/allstories")}
            >
              {t("viewAllStories")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
