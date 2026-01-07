// src/pages/story.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";

import { useStory } from "../hooks/useStories";
import {
  getStoryComments,
  addComment,
  deleteComment,
  getStoryRatingSummary,
  getMyStoryRating,
  upsertStoryRating,
} from "../services/storiesService";

import StoryHeader from "../components/story/storyheader";
import StoryContent from "../components/story/storycontent";
import StoryPagination from "../components/story/storypagination";
import StoryComments from "../components/story/storycomments";
import StoryNotFound from "../components/story/storynotfound";
import { Loader2 } from "lucide-react";

export default function Story() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const { user, userProfile, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const { story, loading, error } = useStory(id);

  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3;

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [myRating, setMyRating] = useState(null);
  const [ratingLoading, setRatingLoading] = useState(true);

  // comments
  useEffect(() => {
    if (!story?.id) return;

    const fetchComments = async () => {
      try {
        setCommentsLoading(true);
        const { data } = await getStoryComments(story.id);
        setComments(data || []);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [story?.id]);

  // rating summary + myRating
  useEffect(() => {
    if (!story?.id) return;

    const fetchRating = async () => {
      try {
        setRatingLoading(true);

        const { data: summary } = await getStoryRatingSummary(story.id);
        if (summary) {
          setRating(summary.average);
          setVotes(summary.count);
        } else {
          setRating(0);
          setVotes(0);
        }

        if (user?.id) {
          const { data: mine } = await getMyStoryRating(story.id, user.id);
          setMyRating(mine);
        } else {
          setMyRating(null);
        }
      } finally {
        setRatingLoading(false);
      }
    };

    fetchRating();
  }, [story?.id, user?.id]);

  // reading history
  useEffect(() => {
    if (!story) return;

    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [
      { id: story.id, title: story.title, image: story.image },
      ...saved.filter((s) => s.id !== story.id),
    ].slice(0, 6);
    localStorage.setItem("recentStories", JSON.stringify(updated));

    if (user?.id) {
      import("../services/userDataService").then(({ updateReadingHistory }) => {
        updateReadingHistory(user.id, story.id, 0).catch(console.error);
      });
    }
  }, [story, user?.id]);

  if (loading) {
    return (
      <PageLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2
            className={`w-12 h-12 animate-spin ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
        </div>
      </PageLayout>
    );
  }

  if (error || !story) {
    return (
      <PageLayout>
        <StoryNotFound onBack={() => navigate("/allstories")} />
      </PageLayout>
    );
  }

  const accessLevel = story.accessLevel || "free";
  const userAccess = userProfile?.subscription_plan || "free";
  const isPremium = accessLevel === "premium";
  const isBasic = accessLevel === "basic";

  // ✅ content din i18n dacă există, altfel din DB
  const i18nKey = story?.i18n_key ?? story?.i18nKey ?? null;

  const fromI18n =
    i18nKey != null
      ? t(`stories.${i18nKey}.content`, { returnObjects: true })
      : null;

  const fullContent =
    Array.isArray(fromI18n) && fromI18n.length > 0
      ? fromI18n
      : Array.isArray(story.content)
      ? story.content
      : [];

  let displayedContent = fullContent;

  const totalPages = displayedContent.length
    ? Math.ceil(displayedContent.length / paragraphsPerPage)
    : 0;

  let canNavigatePages = true;

  if (accessLevel === "free") {
    displayedContent = displayedContent.slice(
      page * paragraphsPerPage,
      (page + 1) * paragraphsPerPage
    );
  } else if (accessLevel === "basic") {
    if (
      !isAuthenticated ||
      (userAccess !== "basic" && userAccess !== "premium")
    ) {
      displayedContent = displayedContent.slice(0, 1);
      canNavigatePages = false;
    } else {
      displayedContent = displayedContent.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      );
    }
  } else if (accessLevel === "premium") {
    if (userAccess !== "premium") {
      displayedContent = displayedContent.slice(0, 1);
      canNavigatePages = false;
    } else {
      displayedContent = displayedContent.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      );
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (!isAuthenticated || !user?.id) return;

    const ok = window.confirm(
      t("comments.confirmDelete") || "Sigur vrei să ștergi comentariul?"
    );
    if (!ok) return;

    const { error } = await deleteComment(commentId);
    if (error) {
      alert(t("comments.errorDelete") || "Eroare la ștergerea comentariului");
      return;
    }

    setComments((prev) => prev.filter((c) => c.id !== commentId));
  };

  const handleAddComment = async (commentText) => {
    if (!isAuthenticated || !user?.id) {
      alert(
        t("comments.mustBeLoggedIn") ||
          "Trebuie să fii autentificat pentru a comenta"
      );
      return;
    }

    const userName =
      userProfile?.full_name || user.email?.split("@")[0] || "Anonymous";

    const { data, error } = await addComment(
      story.id,
      user.id,
      userName,
      commentText
    );

    if (error) {
      alert(t("comments.errorAdd") || "Eroare la adăugarea comentariului");
      return;
    }

    setComments((prev) => [
      {
        id: data.id,
        user_id: user.id,
        user_name: userName,
        content: commentText,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const handleRate = async (newRating) => {
    if (!isAuthenticated || !user?.id) {
      alert(
        t("rating.loginToVote") ||
          "Trebuie să fii autentificat pentru a da rating"
      );
      return;
    }

    if (myRating !== null) {
      alert(t("rating.alreadyRated") || "Ai votat deja această poveste.");
      return;
    }

    const { error } = await upsertStoryRating(story.id, user.id, newRating);

    if (error) {
      alert(t("rating.errorSave") || "Eroare la salvarea rating-ului");
      return;
    }

    setMyRating(newRating);

    const { data: summary } = await getStoryRatingSummary(story.id);
    if (summary) {
      setRating(summary.average);
      setVotes(summary.count);
    }
  };

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <StoryHeader
          story={story}
          darkMode={darkMode}
          rating={rating}
          votes={votes}
          myRating={myRating}
          ratingLoading={ratingLoading}
          isAuthenticated={isAuthenticated}
          onRate={handleRate}
        />

        <StoryContent content={displayedContent} darkMode={darkMode} />

        {!canNavigatePages && (
          <div className="mt-6 text-center p-6 border-t border-gray-300 dark:border-gray-700">
            {isBasic && (userAccess === "free" || !isAuthenticated) && (
              <>
                <p
                  className={`text-lg font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("storyBasicPreview") ||
                    "Aceasta este o previzualizare. Abonează-te pentru a citi mai mult!"}
                </p>
                <button
                  onClick={() => navigate("/subscribe")}
                  className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
                >
                  {t("storyBasicButton") || "Abonare Basic"}
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
                  {t("storyPremiumTitle") || "Conținut Premium"} 🔒
                </h2>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  {t("storyPremiumDescription") ||
                    "Această poveste este disponibilă doar pentru abonații Premium."}
                </p>
                <button
                  onClick={() => navigate("/subscribe")}
                  className="mt-4 px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:opacity-90 transition"
                >
                  {t("storyPremiumButton") || "Abonare Premium"}
                </button>
              </>
            )}
          </div>
        )}

        {canNavigatePages && totalPages > 1 && (
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
          onDeleteComment={handleDeleteComment}
          loading={commentsLoading}
          currentUserId={user?.id}
        />

        <div className="mt-8 text-center">
          <Link
            to="/allstories"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {t("backToAllStories") || "Înapoi la toate poveștile"}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
