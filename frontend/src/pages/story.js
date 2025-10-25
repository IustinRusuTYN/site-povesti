// src/pages/story.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import stories from "../data/stories";

import StoryHeader from "../components/story/storyheader";
import StoryContent from "../components/story/storycontent";
import StoryPagination from "../components/story/storypagination";
import StoryComments from "../components/story/storycomments";
import StoryNotFound from "../components/story/storynotfound";

import { useTranslation } from "react-i18next"; // ✅ import i18n

export default function Story() {
  const { t } = useTranslation(); // ✅ hook i18n
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const { user, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const story = stories.find((s) => s.id === parseInt(id));
  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3;
  const [comments, setComments] = useState(story?.comments || []);
  const [rating, setRating] = useState(
    story?.ratings?.length
      ? story.ratings.reduce((a, b) => a + b, 0) / story.ratings.length
      : 0
  );
  const [votes, setVotes] = useState(story?.ratings?.length || 0);

  useEffect(() => {
    if (!story) return;
    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [story, ...saved.filter((s) => s.id !== story.id)].slice(
      0,
      6
    );
    localStorage.setItem("recentStories", JSON.stringify(updated));
  }, [story]);

  if (!story) {
    return (
      <PageLayout>
        <StoryNotFound onBack={() => navigate("/allstories")} />
      </PageLayout>
    );
  }

  const accessLevel = story.accessLevel || "free";
  const userAccess = isAuthenticated ? user?.plan || "free" : "free";

  const isPremium = accessLevel === "premium";
  const isBasic = accessLevel === "basic";

  let displayedContent = story.content || [];
  const totalPages = story.content
    ? Math.ceil(story.content.length / paragraphsPerPage)
    : 0;

  if (isBasic && !isAuthenticated) {
    displayedContent = story.content.slice(0, paragraphsPerPage);
  } else if (!isPremium) {
    displayedContent = story.content.slice(
      page * paragraphsPerPage,
      (page + 1) * paragraphsPerPage
    );
  }

  const handleAddComment = (comment) =>
    setComments((prev) => [comment, ...prev]);
  const handleRate = (newRating) => {
    const totalRating = rating * votes + newRating;
    const newVotes = votes + 1;
    setRating(totalRating / newVotes);
    setVotes(newVotes);
  };

  const showLoginModal = isBasic && !isAuthenticated;

  return (
    <PageLayout>
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* poți pune aici SignInForm dacă vrei */}
        </div>
      )}

      <section className="max-w-4xl mx-auto px-4 py-10">
        <StoryHeader
          story={story}
          darkMode={darkMode}
          rating={rating}
          votes={votes}
          onRate={handleRate}
        />

        <StoryContent content={displayedContent} darkMode={darkMode} />

        {isPremium && userAccess !== "premium" && (
          <div className="mt-6 text-center p-6 border-t border-gray-300 dark:border-gray-700">
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-yellow-400" : "text-yellow-600"
              }`}
            >
              {t("storyPremiumTitle")} 🔒
            </h2>
            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {t("storyPremiumDescription")}
            </p>
            <button
              onClick={() => navigate("/subscribe")}
              className="mt-4 px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:opacity-90 transition"
            >
              {t("storyPremiumButton")}
            </button>
          </div>
        )}

        {isBasic && !isAuthenticated && (
          <div className="mt-6 text-center p-6 border-t border-gray-300 dark:border-gray-700">
            <p
              className={`text-lg font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {t("storyBasicPreview")}
            </p>
            <button
              onClick={() => navigate("/subscribe")}
              className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
            >
              {t("storyBasicButton")}
            </button>
          </div>
        )}

        {!showLoginModal && !isPremium && (
          <StoryPagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}

        <StoryComments
          comments={comments}
          darkMode={darkMode}
          onAddComment={handleAddComment}
        />

        <div className="mt-8 text-center">
          <Link
            to="/allstories"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {t("backToAllStories")}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
