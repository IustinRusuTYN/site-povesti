import React, { useState } from "react";

export default function StoryComments({ comments, darkMode, onAddComment }) {
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ user: userName, text: userComment });
    setUserName("");
    setUserComment("");
  };

  return (
    <div className="mt-10">
      <h2
        className={`text-2xl font-bold mb-4 ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Comentarii
      </h2>

      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((c, i) => (
            <li
              key={i}
              className={`p-4 rounded-md shadow-sm ${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="font-semibold">{c.user}</p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Nu există comentarii încă.
        </p>
      )}

      <form className="mt-4 flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Numele tău"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={`px-3 py-2 rounded-md border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
          required
        />
        <textarea
          placeholder="Scrie un comentariu..."
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className={`px-3 py-2 rounded-md border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
          rows={3}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Adaugă comentariu
        </button>
      </form>
    </div>
  );
}
