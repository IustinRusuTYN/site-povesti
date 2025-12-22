// src/components/home/featuredstoriescarousel.js
import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen, Star } from "lucide-react";
import Button from "../buttons/Button";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import stories from "../../data/stories";
import { ThemeContext } from "../../context/themecontext";

export default function FeaturedStoriesCarousel() {
  const { darkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [currentStories, setCurrentStories] = useState(stories);

  useEffect(() => {
    const lang = i18n.language;
    const translated = stories.map((story) => ({
      ...story,
      title: story.translations?.[lang]?.title || story.title,
      excerpt: story.translations?.[lang]?.excerpt || story.excerpt,
    }));
    setCurrentStories(translated);
  }, [i18n.language]);

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return null;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <section
      className={`py-10 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="text-purple-500" size={24} />
            <h3
              className={`text-2xl md:text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t("featuredStories")}
            </h3>
          </div>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("discoverAmazingStories")}
          </p>
        </div>

        {/* 3D Carousel */}
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
                    className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } group-hover:scale-105`}
                  >
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                      {story.image ? (
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover"
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
                          <span className="font-medium">{story.category}</span>
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

        {/* ✅ BUTONUL TRANSFORMAT */}
        <div className="text-center mt-6">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => navigate("/allstories")}
          >
            {t("viewAllStories")}
          </Button>
        </div>
      </div>
    </section>
  );
}
