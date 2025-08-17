import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import StoryCard from "../components/storycard";
import PageLayout from "../components/pagelayout";
import girlReading from "../assets/images/girl-reading.png";
import Button from "../components/buttons/Button";

import stories from "../data/stories";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <img
          src={girlReading}
          alt="Reading girl"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay adaptiv */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-700 bg-opacity-50" : "bg-black bg-opacity-40"
          }`}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-start text-center h-full px-4 pt-80">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Read Imaginary Stories
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Explore a collection of romance, sci-fi and more.
          </p>
          <Button variant="secondary">Browse Storyes</Button>
        </div>
      </section>

      {/* Featured Stories */}
      <section
        className={`px-4 py-10 max-w-screen-lg mx-auto ${
          darkMode ? "bg-gray-800" : "bg-slate-100"
        }`}
      >
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

      {/* Go Ad-Free Section */}
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
        <Button variant="primary">Subscribe Now</Button>
      </section>
    </PageLayout>
  );
}
