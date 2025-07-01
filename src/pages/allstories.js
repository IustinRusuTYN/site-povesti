import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AllStories() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          All Stories
        </h1>
        <p className="text-center text-gray-600">
          Aici vor fi afișate toate poveștile.
        </p>
      </div>
      <Footer />
    </div>
  );
}
