// src/pages/story.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";

// ✅ IMPORT HOOK-UL NOU
import { useStory } from "../hooks/useStories";
import { getStoryComments, addComment } from "../services/storiesService";

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

  // ✅ FOLOSIM HOOK-UL PENTRU SUPABASE
  const { story, loading, error } = useStory(id);

  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3;
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [commentsLoading, setCommentsLoading] = useState(true);

  // Încărcăm comentariile
  useEffect(() => {
    if (!story?.id) return;

    const fetchComments = async () => {
      const { data } = await getStoryComments(story.id);
      setComments(data || []);
      setCommentsLoading(false);
    };

    fetchComments();
  }, [story?.id]);

  // Salvăm în istoric local
  // Salvăm în istoric Supabase + localStorage
  useEffect(() => {
    if (!story) return;

    // Salvare în localStorage (pentru compatibilitate)
    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [
      { id: story.id, title: story.title, image: story.image },
      ...saved.filter((s) => s.id !== story.id),
    ].slice(0, 6);
    localStorage.setItem("recentStories", JSON.stringify(updated));

    // ✅ SALVARE ÎN SUPABASE READING_HISTORY
    if (user?.id) {
      import("../services/userDataService").then(({ updateReadingHistory }) => {
        updateReadingHistory(user.id, story.id, 0).catch(console.error);
      });
    }
  }, [story, user?.id]);

  // Loading state
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

  // Error or not found
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

  // Conținutul poveștii (array de paragrafe)
  let displayedContent = story.content || [];
  const totalPages = displayedContent.length
    ? Math.ceil(displayedContent.length / paragraphsPerPage)
    : 0;

  // Logica de acces
  let canNavigatePages = true;

  if (accessLevel === "free") {
    // Oricine poate citi free
    displayedContent = displayedContent.slice(
      page * paragraphsPerPage,
      (page + 1) * paragraphsPerPage
    );
  } else if (accessLevel === "basic") {
    if (
      !isAuthenticated ||
      (userAccess !== "basic" && userAccess !== "premium")
    ) {
      displayedContent = displayedContent.slice(0, 1); // teaser
      canNavigatePages = false;
    } else {
      displayedContent = displayedContent.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      );
    }
  } else if (accessLevel === "premium") {
    if (userAccess !== "premium") {
      displayedContent = displayedContent.slice(0, 1); // teaser
      canNavigatePages = false;
    } else {
      displayedContent = displayedContent.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      );
    }
  }

  const handleAddComment = async (commentText) => {
    if (!isAuthenticated || !user?.id) {
      alert(
        t("mustBeLoggedIn") || "Trebuie să fii autentificat pentru a comenta"
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
      alert(t("errorAddingComment") || "Eroare la adăugarea comentariului");
      return;
    }

    setComments((prev) => [
      {
        id: data.id,
        user_name: userName,
        content: commentText,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const handleRate = (newRating) => {
    // TODO: Implementează cu Supabase în viitor
    const totalRating = rating * votes + newRating;
    const newVotes = votes + 1;
    setRating(totalRating / newVotes);
    setVotes(newVotes);
  };

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <StoryHeader
          story={story}
          darkMode={darkMode}
          rating={rating}
          votes={votes}
          onRate={handleRate}
        />

        <StoryContent content={displayedContent} darkMode={darkMode} />

        {/* Teaser / blocare pentru Basic sau Premium */}
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
          loading={commentsLoading}
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
