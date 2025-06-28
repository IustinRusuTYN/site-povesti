import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";
import StoryCard from "../components/storycard";
import Header from "../components/header";
import girlReading from "../assets/images/girl-reading.png"; // imaginea ta
import poveste1 from "../assets/images/card1.png";
import Footer from "../components/footer";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: "Povestea celor trei frați",
      excerpt: "O aventură fascinantă despre curaj și frăție...",
      image: poveste1,
    },
    {
      id: 2,
      title: "Fata din pădurea fermecată",
      excerpt:
        "O poveste magică despre o fată care descoperă un secret bla bla wfwdfjo wefiwehf wefhwfih wefhwifhew weifhwifbh weefhweihfwihew weifhweifhqidh qifqqwief qifhqifhinqeqi fqif qwfiqnfiq fqwfiqif qiwfi fibfif qif qwif wqif qwi ",
      image: poveste1,
    },
    {
      id: 3,
      title: "Noua poveste",
      excerpt: "Descrierea poveștii noi...",
      image: poveste1,
    },
    {
      id: 4,
      title: "Noua poveste",
      excerpt: "Descrierea poveștii noi...",
      image: poveste1,
    },
    {
      id: 5,
      title: "Noua poveste",
      excerpt: "Descrierea poveștii noi...",
      image: poveste1,
    },
    {
      id: 6,
      title: "Noua poveste",
      excerpt: "Descrierea poveștii noi...",
      image: poveste1,
    },
    {
      id: 7,
      title: "Noua poveste",
      excerpt: "Descrierea poveștii noi...",
      image: poveste1,
    },
  ];

  return (
    <div>
      <Header />
      {/* ✅ Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {/* Imaginea ca background */}
        <img
          src={girlReading}
          alt="Reading girl"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay semi-transparent (opțional) */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Conținut centrat peste imagine */}
        <div className="relative z-10 flex flex-col items-center justify-start text-center h-full text-white px-4 pt-80">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Read Imaginary Stories
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Explore a collection of romance, sci-fi and more.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Browse Stories
          </button>
        </div>
      </section>
      {/* ✅ Featured Stories */}
      <section className="px-4 py-10 bg-gray-100 max-w-screen-lg mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Stories
        </h3>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          loop={true}
          speed={800}
          loopAdditionalSlides={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // continuă autoplay chiar dacă user interacționează
            pauseOnMouseEnter: true, // oprește autoplay când mouse-ul e pe carousel (desktop)
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
      {/* ✅ Go Ad-Free Section */}
      <section className="bg-white py-10 px-4 text-center max-w-screen-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Go Ad-Free with a Subscription
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Enjoy uninterrupted reading by upgrading to our premium, ad-free
          experience.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
          Subscribe Now
        </button>
      </section>
      {/* Footer - aici îl folosim ca să dispară warning-ul */}
      <Footer />
    </div>
  );
}
