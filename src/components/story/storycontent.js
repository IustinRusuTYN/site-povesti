import React from "react";

export default function StoryContent({ content, darkMode }) {
  return (
    <div
      className={`mt-8 prose prose-lg ${
        darkMode ? "prose-invert text-gray-100" : "text-gray-800"
      }`}
    >
      {content.length > 0 ? (
        content.map((para, i) => <p key={i}>{para}</p>)
      ) : (
        <p>Nu există conținut suplimentar pentru această poveste.</p>
      )}
    </div>
  );
}
