// src/components/story/storycontent.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function StoryContent({ content, darkMode }) {
  const { t } = useTranslation();

  return (
    <div
      className={`mt-8 prose prose-lg ${
        darkMode ? "prose-invert text-gray-100" : "text-gray-800"
      }`}
    >
      {content.length > 0 ? (
        content.map((para, i) => <p key={i}>{para}</p>)
      ) : (
        <p>{t("storyContent.noContent")}</p>
      )}
    </div>
  );
}
