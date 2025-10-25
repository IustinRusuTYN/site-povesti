// src/components/story/storypagination.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function StoryPagination({ page, totalPages, setPage }) {
  const { t } = useTranslation();

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 transition"
      >
        {t("storyPagination.prev")} {/* Anterior */}
      </button>

      <span>
        {t("storyPagination.pageInfo", {
          current: page + 1,
          total: totalPages,
        })}
        {/* Pagina X din Y */}
      </span>

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 transition"
      >
        {t("storyPagination.next")} {/* Următoare */}
      </button>
    </div>
  );
}
