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
import story1 from "../assets/images/story1.png";
import story2 from "../assets/images/story2.png";
import story3 from "../assets/images/story3.png";
import story4 from "../assets/images/story4.png";
import story5 from "../assets/images/story5.png";
import story6 from "../assets/images/story6.png";
import story7 from "../assets/images/story7.png";
import Footer from "../components/footer";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: "Sub Luna Albastră",
      excerpt:
        " O tânără descoperă un portal spre o lume ascunsă care apare doar într-o noapte cu lună albastră.",
      image: story1,
    },
    {
      id: 2,
      title: "Fata din pădurea fermecată",
      excerpt: "O poveste magică despre o fată care descoperă un secret . ",
      image: story2,
    },
    {
      id: 3,
      title: "Magicianul din Cețuri",
      excerpt:
        "Un bătrân misterios salvează un sat uitat cu o magie uitată de timp.",
      image: story3,
    },
    {
      id: 4,
      title: "Planeta Umbrelor",
      excerpt:
        "Un astronaut naufragiază pe o planetă unde umbra are voință proprie.",
      image: story4,
    },
    {
      id: 5,
      title: "Trandafirul Fermecat",
      excerpt:
        "O poveste romantică despre un trandafir ce prinde viață și schimbă destinul unei prințese.",
      image: story5,
    },
    {
      id: 6,
      title: "Regina din Nord",
      excerpt:
        "O prințesă devine regină într-o lume înghețată unde zăpada vorbește și ghețarii ascund secrete.",
      image: story6,
    },
    {
      id: 7,
      title: "Mintea Artificială",
      excerpt:
        "Într-un viitor apropiat, o inteligență artificială se îndrăgostește de creatorul său.",
      image: story7,
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
      <section className="px-4 py-10 bg-slate-100 max-w-screen-lg mx-auto">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-blue-700 hover:underline mb-8 transition-all duration-200">
          <a href="/allstories" className="block w-fit mx-auto">
            Featured Stories
          </a>
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
