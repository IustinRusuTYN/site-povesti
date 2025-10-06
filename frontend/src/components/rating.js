// src/components/Rating.js
import React, { useState } from "react";
import { Star } from "lucide-react";

export default function Rating({ rating = 0, votes = 0, onRate }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={20}
          className={`cursor-pointer transition ${
            star <= (hover || rating)
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-500"
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onRate(star)}
        />
      ))}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        ({votes})
      </span>
    </div>
  );
}
