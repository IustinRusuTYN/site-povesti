import React from "react";

export default function StoryCard({ title, excerpt, image }) {
  return (
    <div className="bg-white min-h-[300px] rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-md mb-3 flex-shrink-0"
        />
      )}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden flex-grow">
        {excerpt}
      </p>
    </div>
  );
}
