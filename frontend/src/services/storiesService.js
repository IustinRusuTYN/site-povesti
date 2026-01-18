// src/services/storiesService.js
import { supabase } from "../utils/supabase";

/**
 * Normalizează language la ro/en/fr
 */
function normalizeLang(language) {
  if (typeof language !== "string") return "ro";
  const l = language.toLowerCase();
  if (l.startsWith("en")) return "en";
  if (l.startsWith("fr")) return "fr";
  return "ro";
}

/**
 * Ia un câmp localizat (title_ro/title_en/title_fr etc) cu fallback pe ro
 */
function pickLocalized(row, base, lang) {
  const key = `${base}_${lang}`;
  const fallback = `${base}_ro`;

  const v = row?.[key];
  if (typeof v === "string" && v.trim() !== "") return v;

  const v2 = row?.[fallback];
  if (typeof v2 === "string" && v2.trim() !== "") return v2;

  return "";
}

/**
 * Transformă text (cu paragrafe separate prin linii goale) în array de paragrafe
 */
function splitTextToParagraphs(text) {
  if (typeof text !== "string") return [];
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const STORY_SELECT = `
  id,
  story_number,
  i18n_key,
  title_ro, title_en, title_fr,
  excerpt_ro, excerpt_en, excerpt_fr,
  image_url,
  access_level,
  read_time,
  is_published,
  is_featured,
  view_count,
  created_at,
  updated_at,
  categories ( id, name, slug )
`;

const CHAPTER_SELECT = `
  chapter_number,
  status,
  title_ro, title_en, title_fr,
  content_ro, content_en, content_fr,
  created_at,
  updated_at
`;

/**
 * Map story -> forma folosită de UI (title, excerpt, category, image, accessLevel)
 * IMPORTANT: NU mai luăm content din stories.* (contentul vine din story_chapters)
 */
function mapStory(row, language) {
  const lang = normalizeLang(language);

  const rawImage = row?.image_url;
  const normalizedImage =
    typeof rawImage === "string" && rawImage.trim() !== ""
      ? rawImage.trim()
      : null;

  return {
    id: row.id,

    storyNumber: row?.story_number ?? null,
    story_number: row?.story_number ?? null,

    i18n_key: row?.i18n_key ?? null,

    title: pickLocalized(row, "title", lang),
    excerpt: pickLocalized(row, "excerpt", lang),

    category: row?.categories?.name ?? "Uncategorized",
    categorySlug: row?.categories?.slug ?? null,

    image: normalizedImage,
    image_url: normalizedImage,

    accessLevel: row?.access_level ?? "free",
    access_level: row?.access_level ?? "free",

    readTime: row?.read_time ?? null,
    read_time: row?.read_time ?? null,

    isFeatured: !!row?.is_featured,
    is_featured: !!row?.is_featured,

    viewCount: row?.view_count ?? 0,
    view_count: row?.view_count ?? 0,

    created_at: row?.created_at,
    updated_at: row?.updated_at,

    // compat: nu mai folosim content din stories
    content: [],

    // originale (utile)
    title_ro: row?.title_ro,
    title_en: row?.title_en,
    title_fr: row?.title_fr,
    excerpt_ro: row?.excerpt_ro,
    excerpt_en: row?.excerpt_en,
    excerpt_fr: row?.excerpt_fr,

    categories: row?.categories ?? null,
  };
}

function mapChapter(row, language) {
  const lang = normalizeLang(language);

  const title =
    pickLocalized(row, "title", lang) ||
    `Capitolul ${row?.chapter_number ?? ""}`;

  // content_* e TEXT (Varianta A) -> split în paragrafe
  const contentText = pickLocalized(row, "content", lang);
  const content = splitTextToParagraphs(contentText);

  return {
    chapter_number: row?.chapter_number ?? null,
    status: row?.status || "published", // published | upcoming
    title,
    content,
  };
}

// =======================
// STORIES
// =======================

export async function getAllStories(language) {
  const { data, error } = await supabase
    .from("stories")
    .select(STORY_SELECT)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) return { data: null, error };

  return {
    data: (data ?? []).map((row) => mapStory(row, language)),
    error: null,
  };
}

export async function getFeaturedStories(language) {
  const { data, error } = await supabase
    .from("stories")
    .select(STORY_SELECT)
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  if (error) return { data: null, error };

  return {
    data: (data ?? []).map((row) => mapStory(row, language)),
    error: null,
  };
}

export async function getStoryById(id, language) {
  // 1) Story base
  const { data, error } = await supabase
    .from("stories")
    .select(STORY_SELECT)
    .eq("id", id)
    .eq("is_published", true)
    .single();

  if (error) return { data: null, error };

  const baseStory = mapStory(data, language);

  // 2) Chapters
  const { data: chaptersData, error: chaptersError } = await supabase
    .from("story_chapters")
    .select(CHAPTER_SELECT)
    .eq("story_id", id)
    .order("chapter_number", { ascending: true });

  if (chaptersError) return { data: null, error: chaptersError };

  const chapters = (chaptersData ?? []).map((row) => mapChapter(row, language));

  return {
    data: {
      ...baseStory,
      chapters,
      chapters_count: chapters.length,
    },
    error: null,
  };
}

export async function getStoriesByCategory(categorySlug, language) {
  const { data, error } = await supabase
    .from("stories")
    .select(STORY_SELECT)
    .eq("is_published", true)
    .eq("categories.slug", categorySlug)
    .order("created_at", { ascending: false });

  if (error) return { data: null, error };

  return {
    data: (data ?? []).map((row) => mapStory(row, language)),
    error: null,
  };
}

export async function searchStories(query, language) {
  const q = typeof query === "string" ? query.trim() : "";
  if (!q) return { data: [], error: null };

  const { data, error } = await supabase
    .from("stories")
    .select(STORY_SELECT)
    .eq("is_published", true)
    .or(
      [
        `title_ro.ilike.%${q}%`,
        `title_en.ilike.%${q}%`,
        `title_fr.ilike.%${q}%`,
        `excerpt_ro.ilike.%${q}%`,
        `excerpt_en.ilike.%${q}%`,
        `excerpt_fr.ilike.%${q}%`,
      ].join(",")
    )
    .order("created_at", { ascending: false });

  if (error) return { data: null, error };

  return {
    data: (data ?? []).map((row) => mapStory(row, language)),
    error: null,
  };
}

export async function getAllCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug")
    .order("name", { ascending: true });

  if (error) return { data: null, error };
  return { data: data ?? [], error: null };
}

// =======================
// COMMENTS
// =======================

export async function getStoryComments(storyId) {
  const { data, error } = await supabase
    .from("comments")
    .select(
      "id, story_id, user_id, user_name, content, created_at, is_approved"
    )
    .eq("story_id", storyId)
    .order("created_at", { ascending: false });

  if (error) return { data: null, error };
  return { data: data ?? [], error: null };
}

export async function addComment(storyId, userId, userName, content) {
  const payload = {
    story_id: storyId,
    user_id: userId,
    user_name: userName,
    content,
    is_approved: true,
  };

  const { data, error } = await supabase
    .from("comments")
    .insert(payload)
    .select(
      "id, story_id, user_id, user_name, content, created_at, is_approved"
    )
    .single();

  if (error) return { data: null, error };
  return { data, error: null };
}

export async function deleteComment(commentId) {
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId);
  if (error) return { error };
  return { error: null };
}

// =======================
// RATINGS
// =======================

export async function getStoryRatingSummary(storyId) {
  const { data, error } = await supabase
    .from("ratings")
    .select("rating")
    .eq("story_id", storyId);

  if (error) return { data: null, error };

  const rows = data ?? [];
  const count = rows.length;
  const sum = rows.reduce((acc, x) => acc + (Number(x.rating) || 0), 0);
  const average = count > 0 ? sum / count : 0;

  return { data: { average, count }, error: null };
}

export async function getMyStoryRating(storyId, userId) {
  const { data, error } = await supabase
    .from("ratings")
    .select("rating")
    .eq("story_id", storyId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) return { data: null, error };
  return { data: data?.rating ?? null, error: null };
}

// Compat: cod vechi folosește getStoryRating
export async function getStoryRating(storyId) {
  return getStoryRatingSummary(storyId);
}

export async function upsertStoryRating(storyId, userId, rating) {
  const r = Number(rating);

  if (!Number.isFinite(r) || r < 1 || r > 5) {
    return { data: null, error: { message: "Rating invalid (1..5)" } };
  }

  const { data, error } = await supabase
    .from("ratings")
    .upsert(
      { story_id: storyId, user_id: userId, rating: r },
      { onConflict: "story_id,user_id" }
    )
    .select("id, story_id, user_id, rating, created_at")
    .single();

  if (error) return { data: null, error };
  return { data, error: null };
}
