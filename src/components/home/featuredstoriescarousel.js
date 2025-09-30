// src/components/home/featuredstoriescarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import stories from "../../data/stories";
import StoryCard from "../storycard";

/**
 * featuredstoriescarousel
 *
 * Reusable Swiper-based carousel that displays featured stories.
 *
 * Usage:
 * import FeaturedStoriesCarousel from "../components/home/featuredstoriescarousel";
 * <FeaturedStoriesCarousel />
 *
 * Notes:
 * - Uses local data (data/stories.js). When backend is integrated, this component
 *   can accept a `stories` prop or fetch its own data.
 * - Swiper configuration is mobile-first and responsive via breakpoints.
 */
export default function FeaturedStoriesCarousel() {
  return (
    <section className="px-4 py-10 max-w-screen-lg mx-auto bg-slate-100 dark:bg-gray-800">
      <h3 className="text-2xl md:text-4xl font-bold text-center text-blue-700 hover:underline mb-8 transition-all duration-200">
        <Link to="/allstories" className="block w-fit mx-auto">
          Featured Stories
        </Link>
      </h3>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          480: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
        loop={true}
        speed={800}
        loopAdditionalSlides={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="h-auto">
            <div className="h-full">
              <StoryCard
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
