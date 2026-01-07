// src/components/story/storycomments.js
import React, { useState } from "react";

export default function StoryComments({
  comments = [],
  darkMode,
  onAddComment,
  onDeleteComment,
  loading,
  currentUserId,
}) {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // IMPORTANT: previne refresh -> nu “te deconectează”
    const value = text.trim();
    if (!value) return;

    try {
      setSubmitting(true);
      await onAddComment?.(value);
      setText("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Comentarii
        </h3>
        <span
          className={
            darkMode ? "text-gray-400 text-sm" : "text-gray-500 text-sm"
          }
        >
          {comments?.length || 0}
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div
          className={`rounded-xl border p-3 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Scrie un comentariu..."
            className={`w-full resize-none bg-transparent outline-none ${
              darkMode
                ? "text-gray-100 placeholder:text-gray-500"
                : "text-gray-900 placeholder:text-gray-400"
            }`}
          />

          <div className="mt-3 flex items-center justify-between">
            <p
              className={
                darkMode ? "text-gray-500 text-xs" : "text-gray-400 text-xs"
              }
            >
              {text.trim().length}/500
            </p>

            <button
              type="submit"
              disabled={submitting || !text.trim()}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                submitting || !text.trim()
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:opacity-90"
              } bg-indigo-600 text-white`}
            >
              {submitting ? "Se trimite..." : "Trimite"}
            </button>
          </div>
        </div>
      </form>

      {/* Loading */}
      {loading && (
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Se încarcă comentariile...
        </p>
      )}

      {/* List */}
      {!loading && (!comments || comments.length === 0) && (
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Nu există comentarii încă.
        </p>
      )}

      <div className="space-y-4">
        {(comments || []).map((c) => {
          const isOwner = !!currentUserId && c.user_id === currentUserId;

          return (
            <div
              key={c.id}
              className={`rounded-xl border p-4 ${
                darkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p
                    className={
                      darkMode
                        ? "text-gray-100 font-semibold"
                        : "text-gray-900 font-semibold"
                    }
                  >
                    {c.user_name || "Anonim"}
                  </p>
                  <p
                    className={
                      darkMode
                        ? "text-gray-500 text-xs"
                        : "text-gray-500 text-xs"
                    }
                  >
                    {c.created_at
                      ? new Date(c.created_at).toLocaleString()
                      : ""}
                  </p>
                </div>

                {isOwner && (
                  <button
                    type="button"
                    onClick={() => onDeleteComment?.(c.id)}
                    className={`text-xs font-semibold px-3 py-1 rounded-lg border transition ${
                      darkMode
                        ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                    title="Șterge comentariul"
                  >
                    Șterge
                  </button>
                )}
              </div>

              <p
                className={`mt-3 whitespace-pre-wrap ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {c.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
