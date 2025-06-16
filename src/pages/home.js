import React from "react";
import StoryCard from "../components/storycard";
import Header from "../components/header";

const stories = [
  {
    id: 1,
    title: "Povestea celor trei frați",
    excerpt: "O aventură fascinantă despre curaj și frăție...",
  },
  {
    id: 2,
    title: "Fata din pădurea fermecată",
    excerpt: "O poveste magică despre o fată care descoperă un secret...",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          📖 Povești de citit
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              title={story.title}
              excerpt={story.excerpt}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
