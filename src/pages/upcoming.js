import React, { useContext } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/ThemeContext";

export default function Upcoming() {
  const { darkMode } = useContext(ThemeContext);

  const upcomingItems = [
    {
      title: "New Story: The Magic Forest",
      date: "Releases on 25th August 2025",
    },
    {
      title: "Live Event: Storytelling Night",
      date: "Join us on 1st September 2025",
    },
    {
      title: "New Collection: Adventure Tales",
      date: "Coming soon!",
    },
  ];

  return (
    <PageLayout>
      <main className="flex-grow max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Upcoming Stories & Events
        </h1>
        <p className="mb-12 text-lg md:text-xl text-gray-400">
          Stay tuned! Exciting stories and events are coming soon. Don’t miss
          out!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 transition-transform transform hover:scale-105 shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
