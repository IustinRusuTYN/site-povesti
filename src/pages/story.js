// src/pages/story.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import stories from "../data/stories";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import Rating from "../components/rating";

export default function Story() {
  const { darkMode } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const story = stories.find((s) => s.id === parseInt(id));

  // Salvează povestea curentă în recentStories în localStorage
  useEffect(() => {
    if (!story) return;

    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [story, ...saved.filter((s) => s.id !== story.id)].slice(
      0,
      6
    );
    localStorage.setItem("recentStories", JSON.stringify(updated));
  }, [story]);

  // State pentru paginare conținut
  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3;

  // State pentru comentarii
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState(story?.comments || []);

  // State pentru rating
  const [rating, setRating] = useState(
    story?.ratings
      ? story.ratings.reduce((a, b) => a + b, 0) / story.ratings.length
      : 0
  );
  const [votes, setVotes] = useState(story?.ratings?.length || 0);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = { user: userName, text: userComment };
    setComments((prev) => [newComment, ...prev]);
    setUserName("");
    setUserComment("");
  };

  const handleRate = (newRating) => {
    const totalRating = rating * votes + newRating;
    const newVotes = votes + 1;
    setRating(totalRating / newVotes);
    setVotes(newVotes);
  };

  // Calcul paginare
  const totalPages = story?.content
    ? Math.ceil(story.content.length / paragraphsPerPage)
    : 0;
  const currentContent = story?.content
    ? story.content.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      )
    : [];

  if (!story) {
    return (
      <PageLayout>
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
          <h2
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Povestea nu a fost găsită
          </h2>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Povestea pe care încerci să o accesezi nu există sau a fost ștearsă.
          </p>
          <button
            onClick={() => navigate("/allstories")}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Înapoi la toate poveștile
          </button>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* Header Story */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={story.image}
            alt={story.title}
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="flex-1">
            <h1
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {story.title}
            </h1>
            {story.category && (
              <span
                className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  darkMode
                    ? "bg-gray-700 text-gray-100"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {story.category}
              </span>
            )}
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {story.excerpt}
            </p>

            {/* Average Rating Display */}
            <div className="mt-4 flex items-center space-x-2">
              <span
                className={`${
                  darkMode ? "text-gray-100" : "text-gray-800"
                } font-medium text-sm`}
              >
                Rating mediu:
              </span>
              <span className="text-yellow-400 text-sm">
                {votes > 0 ? rating.toFixed(1) : "N/A"}★
              </span>
            </div>

            {/* Rating Component */}
            <div className="mt-2">
              <Rating rating={rating} votes={votes} onRate={handleRate} />
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div
          className={`mt-8 prose prose-lg ${
            darkMode ? "prose-invert text-gray-100" : "text-gray-800"
          }`}
        >
          {currentContent.length > 0 ? (
            currentContent.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>Nu există conținut suplimentar pentru această poveste.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 transition"
            >
              Anterior
            </button>
            <span>
              Pagina {page + 1} din {totalPages}
            </span>
            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 transition"
            >
              Următoare
            </button>
          </div>
        )}

        {/* Comentarii */}
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

          <form
            className="mt-4 flex flex-col space-y-2"
            onSubmit={handleAddComment}
          >
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

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/allstories"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Înapoi la toate poveștile
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
