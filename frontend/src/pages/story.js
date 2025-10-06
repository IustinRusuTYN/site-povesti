// src/pages/story.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import stories from "../data/stories";

import StoryHeader from "../components/story/storyheader";
import StoryContent from "../components/story/storycontent";
import StoryPagination from "../components/story/storypagination";
import StoryComments from "../components/story/storycomments";
import StoryNotFound from "../components/story/storynotfound";

export default function Story() {
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const story = stories.find((s) => s.id === parseInt(id));

  // salvează în localStorage povestea curentă ca recentă
  useEffect(() => {
    if (!story) return;
    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    const updated = [story, ...saved.filter((s) => s.id !== story.id)].slice(
      0,
      6
    );
    localStorage.setItem("recentStories", JSON.stringify(updated));
  }, [story]);

  // state paginare
  const [page, setPage] = useState(0);
  const paragraphsPerPage = 3;

  // state comentarii
  const [comments, setComments] = useState(story?.comments || []);

  // state rating
  const [rating, setRating] = useState(
    story?.ratings?.length
      ? story.ratings.reduce((a, b) => a + b, 0) / story.ratings.length
      : 0
  );
  const [votes, setVotes] = useState(story?.ratings?.length || 0);

  const handleAddComment = (comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  const handleRate = (newRating) => {
    const totalRating = rating * votes + newRating;
    const newVotes = votes + 1;
    setRating(totalRating / newVotes);
    setVotes(newVotes);
  };

  // paginare text
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
        <StoryNotFound onBack={() => navigate("/allstories")} />
      </PageLayout>
    );
  }

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

        <StoryContent content={currentContent} darkMode={darkMode} />

        <StoryPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

        <StoryComments
          comments={comments}
          darkMode={darkMode}
          onAddComment={handleAddComment}
        />

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
