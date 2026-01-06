// src/services/storiesService.js
import { supabase } from "../utils/supabase";
import { getStoryImage } from "../utils/imageHelper";

/**
 * Obține toate poveștile publicate
 * @param {string} language - Limba curentă (ro, en, fr)
 */
export async function getAllStories(language = "ro") {
  try {
    const { data, error } = await supabase
      .from("stories")
      .select(
        `
        id,
        title_ro, title_en, title_fr,
        excerpt_ro, excerpt_en, excerpt_fr,
        image_url,
        access_level,
        read_time,
        is_featured,
        view_count,
        created_at,
        category:categories(id, name, slug),
        author:authors(id, name)
      `
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Transformăm datele pentru a fi compatibile cu formatul vechi
    const transformedData = data.map((story) =>
      transformStory(story, language)
    );

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching stories:", error);
    return { data: null, error };
  }
}

/**
 * Obține poveștile featured (pentru carousel)
 */
export async function getFeaturedStories(language = "ro") {
  try {
    const { data, error } = await supabase
      .from("stories")
      .select(
        `
        id,
        title_ro, title_en, title_fr,
        excerpt_ro, excerpt_en, excerpt_fr,
        image_url,
        access_level,
        read_time,
        is_featured,
        category:categories(id, name, slug),
        author:authors(id, name)
      `
      )
      .eq("is_published", true)
      .eq("is_featured", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (error) throw error;

    const transformedData = data.map((story) =>
      transformStory(story, language)
    );

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching featured stories:", error);
    return { data: null, error };
  }
}

/**
 * Obține o poveste după ID
 */
export async function getStoryById(id, language = "ro") {
  try {
    const { data, error } = await supabase
      .from("stories")
      .select(
        `
        id,
        title_ro, title_en, title_fr,
        excerpt_ro, excerpt_en, excerpt_fr,
        content,
        image_url,
        access_level,
        read_time,
        is_featured,
        view_count,
        created_at,
        category:categories(id, name, slug),
        author:authors(id, name, bio)
      `
      )
      .eq("id", id)
      .eq("is_published", true)
      .single();

    if (error) throw error;

    // Incrementăm view count
    await supabase
      .from("stories")
      .update({ view_count: (data.view_count || 0) + 1 })
      .eq("id", id);

    return { data: transformStory(data, language, true), error: null };
  } catch (error) {
    console.error("Error fetching story:", error);
    return { data: null, error };
  }
}

/**
 * Obține povești după categorie
 */
export async function getStoriesByCategory(categorySlug, language = "ro") {
  try {
    const { data, error } = await supabase
      .from("stories")
      .select(
        `
        id,
        title_ro, title_en, title_fr,
        excerpt_ro, excerpt_en, excerpt_fr,
        image_url,
        access_level,
        read_time,
        category:categories!inner(id, name, slug),
        author:authors(id, name)
      `
      )
      .eq("is_published", true)
      .eq("categories.slug", categorySlug)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const transformedData = data.map((story) =>
      transformStory(story, language)
    );

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching stories by category:", error);
    return { data: null, error };
  }
}

/**
 * Caută povești
 */
export async function searchStories(query, language = "ro") {
  try {
    const { data, error } = await supabase
      .from("stories")
      .select(
        `
        id,
        title_ro, title_en, title_fr,
        excerpt_ro, excerpt_en, excerpt_fr,
        image_url,
        access_level,
        read_time,
        category:categories(id, name, slug),
        author:authors(id, name)
      `
      )
      .eq("is_published", true)
      .or(
        `title_ro.ilike.%${query}%,title_en.ilike.%${query}%,excerpt_ro.ilike.%${query}%,excerpt_en.ilike.%${query}%`
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    const transformedData = data.map((story) =>
      transformStory(story, language)
    );

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error searching stories:", error);
    return { data: null, error };
  }
}

/**
 * Obține toate categoriile
 */
export async function getAllCategories(language = "ro") {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (error) throw error;

    const transformedData = data.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat[`description_${language}`] || cat.description_ro,
      image_url: cat.image_url,
    }));

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { data: null, error };
  }
}

/**
 * Obține rating-ul mediu al unei povești
 */
export async function getStoryRating(storyId) {
  try {
    const { data, error } = await supabase
      .from("ratings")
      .select("rating")
      .eq("story_id", storyId);

    if (error) throw error;

    if (!data || data.length === 0) {
      return { data: { average: 0, count: 0 }, error: null };
    }

    const average = data.reduce((sum, r) => sum + r.rating, 0) / data.length;

    return {
      data: {
        average: Math.round(average * 10) / 10,
        count: data.length,
        ratings: data.map((r) => r.rating),
      },
      error: null,
    };
  } catch (error) {
    console.error("Error fetching rating:", error);
    return { data: null, error };
  }
}

/**
 * Adaugă sau actualizează rating
 */
export async function rateStory(storyId, userId, rating) {
  try {
    const { data, error } = await supabase
      .from("ratings")
      .upsert(
        { story_id: storyId, user_id: userId, rating },
        { onConflict: "story_id,user_id" }
      )
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error rating story:", error);
    return { data: null, error };
  }
}

/**
 * Obține comentariile unei povești
 */
export async function getStoryComments(storyId) {
  try {
    const { data, error } = await supabase
      .from("comments")
      .select(
        `
        id,
        content,
        user_name,
        created_at,
        user:profiles(id, full_name, avatar_url)
      `
      )
      .eq("story_id", storyId)
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { data: null, error };
  }
}

/**
 * Adaugă un comentariu
 */
export async function addComment(storyId, userId, userName, content) {
  try {
    const { data, error } = await supabase
      .from("comments")
      .insert({
        story_id: storyId,
        user_id: userId,
        user_name: userName,
        content,
      })
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error adding comment:", error);
    return { data: null, error };
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Transformă datele din Supabase în formatul folosit de componente
 */
function transformStory(story, language = "ro", includeContent = false) {
  const transformed = {
    id: story.id,
    title: story[`title_${language}`] || story.title_ro,
    excerpt: story[`excerpt_${language}`] || story.excerpt_ro,
    image: getStoryImage(story.image_url), // ✅ FOLOSEȘTE HELPER-UL
    category: story.category?.name || "Uncategorized",
    categorySlug: story.category?.slug,
    author: story.author?.name || "Unknown",
    authorBio: story.author?.bio,
    accessLevel: story.access_level,
    readTime: story.read_time,
    isFeatured: story.is_featured,
    viewCount: story.view_count,
    createdAt: story.created_at,
    // Pentru compatibilitate cu codul vechi
    translations: {
      ro: { title: story.title_ro, excerpt: story.excerpt_ro },
      en: { title: story.title_en, excerpt: story.excerpt_en },
      fr: { title: story.title_fr, excerpt: story.excerpt_fr },
    },
  };

  if (includeContent) {
    transformed.content = story.content || [];
  }

  return transformed;
}
