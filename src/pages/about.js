import React, { useContext } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">StoryTeller</span> — a
          place where stories come to life. Our mission is to create an
          inspiring collection of tales for all ages, available anytime and
          anywhere.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`p-6 rounded-2xl shadow-md transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-3">🌍 Our Vision</h2>
            <p>
              We believe in the power of storytelling to connect people across
              cultures, generations, and experiences. Every story is a bridge to
              imagination.
            </p>
          </div>
          <div
            className={`p-6 rounded-2xl shadow-md transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-3">📚 What We Do</h2>
            <p>
              We gather and share a diverse range of stories — from classic
              fairy tales to original narratives — to make reading fun and
              accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
