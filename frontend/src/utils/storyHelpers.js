// src/utils/storyHelpers.js
export const getStoryText = (story, lang = "ro") => {
  if (!story || !story.translations) return { title: "", excerpt: "" };

  const translation =
    story.translations[lang] ||
    story.translations.ro ||
    story.translations.en ||
    {};

  return {
    title: typeof translation.title === "string" ? translation.title : "",
    excerpt: typeof translation.excerpt === "string" ? translation.excerpt : "",
  };
};
