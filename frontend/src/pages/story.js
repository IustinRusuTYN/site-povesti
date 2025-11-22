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

import { useTranslation } from "react-i18next";

export default function Story() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const { user, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const story = stories.find((s) => s.id === parseInt(id));
  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3; // câte paragrafe per pagină
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

  // Obținem conținutul traducerilor
  let displayedContent =
    story.content?.map((p, idx) => t(`stories.${story.id}.content.${idx}`)) ||
    [];
  const totalPages = displayedContent.length
    ? Math.ceil(displayedContent.length / paragraphsPerPage)
    : 0;

  // --- Logica teaser și blocare pagini ---
  let canNavigatePages = true;

  if (isBasic && !isAuthenticated) {
    displayedContent = displayedContent.slice(0, 1); // teaser doar primul paragraf
    canNavigatePages = false;
  } else if (isPremium && userAccess !== "premium") {
    displayedContent = displayedContent.slice(0, 1); // teaser doar primul paragraf
    canNavigatePages = false;
  } else if (!isPremium) {
    displayedContent = displayedContent.slice(
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

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* Headerul poveștii */}
        <StoryHeader
          story={{
            ...story,
            title: t(`stories.${story.id}.title`),
            excerpt: t(`stories.${story.id}.excerpt`),
          }}
          darkMode={darkMode}
          rating={rating}
          votes={votes}
          onRate={handleRate}
        />

        {/* Conținutul poveștii */}
        <StoryContent content={displayedContent} darkMode={darkMode} />

        {/* Teaser / blocare pentru Basic sau Premium */}
        {(!canNavigatePages ||
          isBasic ||
          (isPremium && userAccess !== "premium")) && (
          <div className="mt-6 text-center p-6 border-t border-gray-300 dark:border-gray-700">
            {isBasic && !isAuthenticated && (
              <>
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
              </>
            )}
            {isPremium && userAccess !== "premium" && (
              <>
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
              </>
            )}
          </div>
        )}

        {/* Paginare pentru cei care pot naviga */}
        {canNavigatePages && totalPages > 1 && (
          <StoryPagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}

        {/* Comentarii */}
        <StoryComments
          comments={comments}
          darkMode={darkMode}
          onAddComment={handleAddComment}
        />

        {/* Back to All Stories */}
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
