import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/ThemeContext";
import Button from "../components/buttons/Button";

export default function Subscribe() {
  const { darkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      // Integrare backend/API pe viitor
    }
  };

  return (
    <PageLayout>
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Join Our StoryTeller Community
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Subscribe now and get exclusive access to new stories, updates, and
          surprises. Never miss a tale again!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`px-4 py-3 rounded-md w-full sm:w-80 focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-800 text-gray-100 border-gray-700 focus:ring-blue-400"
                : "bg-white text-gray-900 border border-gray-300 focus:ring-blue-600"
            }`}
          />
          <Button variant="primary">Subscribe</Button>
        </form>

        {submitted && (
          <p className="text-green-400 font-medium mt-2">
            Thank you for subscribing! 🎉
          </p>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div
            className={`p-6 rounded-2xl shadow-md transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Exclusive Stories</h2>
            <p>
              Get first access to new and original tales before anyone else.
            </p>
          </div>
          <div
            className={`p-6 rounded-2xl shadow-md transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Community Updates</h2>
            <p>Be part of our storytelling community with tips and news.</p>
          </div>
          <div
            className={`p-6 rounded-2xl shadow-md transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Special Surprises</h2>
            <p>Occasional surprises and bonuses just for our subscribers!</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
