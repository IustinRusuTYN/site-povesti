import React from "react";

const StoryCard = ({ title, excerpt }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <button className="mt-4 text-blue-500 hover:underline">
        Citește mai mult
      </button>
    </div>
  );
};

export default StoryCard;
