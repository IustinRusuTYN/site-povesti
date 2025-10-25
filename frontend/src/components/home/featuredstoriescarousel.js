// src/components/home/featuredstoriescarousel.js
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 🔹 import

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import stories from "../../data/stories";
import StoryCard from "../storycard";
import { ThemeContext } from "../../context/themecontext";

export default function FeaturedStoriesCarousel() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation(); // 🔹 hook pentru traduceri

  return (
    <section
      className={`px-4 py-12 max-w-screen-lg mx-auto rounded-2xl transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg"
          : "bg-gradient-to-r from-indigo-100 via-white to-indigo-200 text-gray-900 shadow-md"
      }`}
    >
      <h3
        className={`text-2xl md:text-4xl font-extrabold text-center mb-8 w-fit mx-auto cursor-pointer transition-colors duration-300 ${
          darkMode
            ? "text-indigo-600 hover:text-indigo-300"
            : "text-gray-800 hover:text-gray-400"
        }`}
      >
        <Link to="/allstories">{t("featuredStories")}</Link>{" "}
        {/* 🔹 text tradus */}
      </h3>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 2.5, spaceBetween: 12 },
          768: { slidesPerView: 3.5, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
        loop={true}
        speed={800}
        loopAdditionalSlides={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="h-auto">
            <Link to={`/story/${story.id}`} className="block h-full">
              <div
                className={`h-full rounded-xl shadow-lg transition-shadow duration-300 ${
                  darkMode
                    ? "hover:shadow-purple-600/50"
                    : "hover:shadow-purple-300/50"
                }`}
              >
                <StoryCard
                  title={story.title}
                  excerpt={story.excerpt}
                  image={story.image}
                  darkMode={darkMode}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
