// src/pages/story.js
import React, { useContext, useState, useEffect, useMemo } from "react";
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
import {
  Loader2,
  Lock,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/** ============ UI helpers ============ **/
function AdSlot({ darkMode, label = "Ad" }) {
  return (
    <div
      className={`rounded-2xl border p-4 text-center text-sm ${
        darkMode
          ? "bg-gray-900/40 border-white/10 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="flex items-center justify-center gap-2 font-semibold">
        <Sparkles
          size={16}
          className={darkMode ? "text-indigo-300" : "text-indigo-600"}
        />
        {label} (placeholder)
      </div>
      <p
        className={`mt-2 text-xs ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Slot pregătit pentru reclame (Free).
      </p>
    </div>
  );
}

function PaywallCard({
  darkMode,
  accessLevel,
  userAccess,
  isAuthenticated,
  onSubscribe,
  onSignIn,
  t,
}) {
  const isBasic = accessLevel === "basic";
  const isPremium = accessLevel === "premium";

  return (
    <div
      className={`mt-6 rounded-2xl border p-6 text-center ${
        darkMode ? "bg-gray-900/40 border-white/10" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`mx-auto mb-4 inline-flex items-center justify-center rounded-full p-3 ${
          darkMode ? "bg-indigo-500/15" : "bg-indigo-100"
        }`}
      >
        {isPremium ? (
          <Crown className={darkMode ? "text-yellow-300" : "text-yellow-600"} />
        ) : (
          <Lock className={darkMode ? "text-indigo-300" : "text-indigo-700"} />
        )}
      </div>

      {isBasic && (userAccess === "free" || !isAuthenticated) && (
        <>
          <h3
            className={`text-xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("storyBasicPreviewTitle", "Previzualizare Basic")}
          </h3>
          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t(
              "storyBasicPreview",
              "Aceasta este o previzualizare. Autentifică-te și abonează-te pentru a citi mai mult."
            )}
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            {!isAuthenticated && (
              <button
                onClick={onSignIn}
                className={`px-5 py-2 rounded-xl font-semibold border transition ${
                  darkMode
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {t("storySignIn", "Autentificare")}
              </button>
            )}

            <button
              onClick={onSubscribe}
              className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 transition"
            >
              {t("storyBasicButton", "Alege Basic")}
            </button>
          </div>
        </>
      )}

      {isPremium && userAccess !== "premium" && (
        <>
          <h3
            className={`text-xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("storyPremiumTitle", "Conținut Premium")}
          </h3>
          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t(
              "storyPremiumDescription",
              "Această poveste este disponibilă doar pentru abonații Premium."
            )}
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            {!isAuthenticated && (
              <button
                onClick={onSignIn}
                className={`px-5 py-2 rounded-xl font-semibold border transition ${
                  darkMode
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {t("storySignIn", "Autentificare")}
              </button>
            )}

            <button
              onClick={onSubscribe}
              className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-95 transition"
            >
              {t("storyPremiumButton", "Alege Premium")}
            </button>
          </div>
        </>
      )}

      <div
        className={`mt-6 text-xs ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {t(
          "storyPaywallHint",
          "Tip: Basic/Premium oferă acces complet și (în viitor) fără întreruperi."
        )}
      </div>
    </div>
  );
}

function ChapterPicker({
  darkMode,
  chapters,
  chapterIndex,
  setChapterIndex,
  t,
}) {
  return (
    <div className="mb-4">
      {/* Mobile */}
      <div className="sm:hidden">
        <select
          value={chapterIndex}
          onChange={(e) => setChapterIndex(Number(e.target.value))}
          className={`w-full px-3 py-2 rounded-xl border outline-none ${
            darkMode
              ? "bg-gray-900/40 border-white/10 text-gray-100"
              : "bg-white border-gray-200 text-gray-900"
          }`}
        >
          {chapters.map((ch, idx) => (
            <option key={idx} value={idx}>
              {t("chapter", "Capitol")} {idx + 1}
              {ch?.status === "upcoming"
                ? ` — ${t("upcomingChapter", "În curând")}`
                : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-wrap gap-2 items-center">
        {chapters.map((ch, idx) => {
          const active = idx === chapterIndex;
          const upcoming = ch?.status === "upcoming";

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setChapterIndex(idx)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold border transition ${
                active
                  ? darkMode
                    ? "border-indigo-400/40 bg-indigo-500/15 text-indigo-200"
                    : "border-indigo-300 bg-indigo-50 text-indigo-800"
                  : upcoming
                  ? darkMode
                    ? "border-white/10 text-gray-400 hover:bg-white/5"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  : darkMode
                  ? "border-white/10 text-gray-200 hover:bg-white/5"
                  : "border-gray-200 text-gray-800 hover:bg-gray-50"
              }`}
              title={upcoming ? t("upcomingChapter", "În curând") : ""}
            >
              {t("chapterShort", "Cap")} {idx + 1}
              {upcoming ? " 🔒" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Story() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const { user, userProfile, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const { story, loading, error } = useStory(id);

  // mai mult text per pagină
  const paragraphsPerPage = 12;

  const [page, setPage] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [myRating, setMyRating] = useState(null);
  const [ratingLoading, setRatingLoading] = useState(true);

  useEffect(() => {
    setPage(0);
    setChapterIndex(0);
  }, [id]);

  const accessLevel = story?.accessLevel || story?.access_level || "free";
  const userAccess = userProfile?.subscription_plan || "free";
  const showAds = userAccess === "free";

  // ✅ IMPORTANT: capitolele vin din SUPABASE (getStoryById)
  const chapters = useMemo(() => {
    return Array.isArray(story?.chapters) ? story.chapters : [];
  }, [story?.chapters]);

  const currentChapter =
    chapters[Math.min(chapterIndex, Math.max(0, chapters.length - 1))] || null;

  const isUpcomingChapter = currentChapter?.status === "upcoming";

  const fullContent = useMemo(() => {
    if (isUpcomingChapter) return [];
    return Array.isArray(currentChapter?.content) ? currentChapter.content : [];
  }, [currentChapter?.content, isUpcomingChapter]);

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

  // rating
  useEffect(() => {
    if (!story?.id) return;

    const fetchRating = async () => {
      try {
        setRatingLoading(true);

        const { data: summary } = await getStoryRatingSummary(story.id);
        setRating(summary?.average || 0);
        setVotes(summary?.count || 0);

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
    if (!story?.id) return;

    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [
      { id: story.id, title: story.title, image: story.image },
      ...saved.filter((s) => s.id !== story.id),
    ].slice(0, 6);

    localStorage.setItem("recentStories", JSON.stringify(updated));
  }, [story?.id, story?.title, story?.image]);

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

  // gating + pagination
  let displayedContent = fullContent;
  let canNavigatePages = true;

  const totalPages = displayedContent.length
    ? Math.ceil(displayedContent.length / paragraphsPerPage)
    : 0;

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
      displayedContent = displayedContent.slice(0, 2);
      canNavigatePages = false;
    } else {
      displayedContent = displayedContent.slice(
        page * paragraphsPerPage,
        (page + 1) * paragraphsPerPage
      );
    }
  } else if (accessLevel === "premium") {
    if (userAccess !== "premium") {
      displayedContent = displayedContent.slice(0, 2);
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
    setRating(summary?.average || 0);
    setVotes(summary?.count || 0);
  };

  return (
    <PageLayout>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate("/allstories")}
            className={`text-sm font-semibold hover:underline underline-offset-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            ← {t("backToAllStories", "Înapoi la toate poveștile")}
          </button>

          <button
            onClick={() => navigate("/subscribe")}
            className={`text-sm font-semibold inline-flex items-center gap-2 ${
              darkMode ? "text-indigo-300" : "text-indigo-700"
            } hover:underline underline-offset-4`}
          >
            <ArrowRight size={16} />
            {t("storyUpgrade", "Upgrade")}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
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

            <div
              className={`mt-6 rounded-2xl border overflow-hidden ${
                darkMode
                  ? "bg-gray-800/40 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`px-5 sm:px-6 py-5 border-b ${
                  darkMode ? "border-white/10" : "border-gray-200"
                }`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t("reading", "Lectură")}
                </div>

                {chapters.length > 0 && (
                  <ChapterPicker
                    darkMode={darkMode}
                    chapters={chapters}
                    chapterIndex={chapterIndex}
                    setChapterIndex={(idx) => {
                      setChapterIndex(idx);
                      setPage(0);
                    }}
                    t={t}
                  />
                )}

                {currentChapter?.title && (
                  <div
                    className={`text-lg font-extrabold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {currentChapter.title}
                  </div>
                )}
              </div>

              <div className="px-5 sm:px-6 py-6">
                {isUpcomingChapter ? (
                  <div
                    className={`rounded-2xl border p-6 text-center ${
                      darkMode
                        ? "bg-gray-900/40 border-white/10 text-gray-200"
                        : "bg-gray-50 border-gray-200 text-gray-800"
                    }`}
                  >
                    <h3 className="text-xl font-extrabold">
                      {t("upcomingChapterTitle", "Capitol în curând")}
                    </h3>
                    <p
                      className={`mt-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t(
                        "upcomingChapterDesc",
                        "Acest capitol va fi adăugat în curând. Revino pentru continuare."
                      )}
                    </p>
                  </div>
                ) : (
                  <StoryContent
                    content={displayedContent}
                    darkMode={darkMode}
                  />
                )}

                {!canNavigatePages && !isUpcomingChapter && (
                  <PaywallCard
                    darkMode={darkMode}
                    accessLevel={accessLevel}
                    userAccess={userAccess}
                    isAuthenticated={isAuthenticated}
                    onSubscribe={() => navigate("/subscribe")}
                    onSignIn={() => navigate("/signin")}
                    t={t}
                  />
                )}

                {canNavigatePages && showAds && !isUpcomingChapter && (
                  <div className="mt-6">
                    <AdSlot
                      darkMode={darkMode}
                      label={t("adLabel", "Reclamă")}
                    />
                  </div>
                )}
              </div>

              {canNavigatePages && totalPages > 1 && !isUpcomingChapter && (
                <div
                  className={`px-5 sm:px-6 py-4 border-t ${
                    darkMode ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <StoryPagination
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                  />
                </div>
              )}
            </div>

            <div className="mt-10">
              <StoryComments
                comments={comments}
                darkMode={darkMode}
                onAddComment={handleAddComment}
                onDeleteComment={handleDeleteComment}
                loading={commentsLoading}
                currentUserId={user?.id}
              />
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/allstories"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                <CheckCircle size={16} />
                {t("backToAllStories", "Înapoi la toate poveștile")}
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {showAds && !isUpcomingChapter && (
                <AdSlot darkMode={darkMode} label={t("adLabel", "Reclamă")} />
              )}
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
