// src/services/userDataService.js
import { supabase } from "../utils/supabase";

// ============================================
// FAVORITES
// ============================================

/**
 * Obține favoritele utilizatorului
 */
export async function getUserFavorites(userId, language = "ro") {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .select(
        `
        id,
        created_at,
        story:stories(
          id,
          title_ro, title_en, title_fr,
          excerpt_ro, excerpt_en, excerpt_fr,
          image_url,
          access_level,
          read_time,
          category:categories(name, slug),
          author:authors(name)
        )
      `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Transform to match expected format
    const transformedData = data.map((fav) => ({
      id: fav.story.id,
      title: fav.story[`title_${language}`] || fav.story.title_ro,
      excerpt: fav.story[`excerpt_${language}`] || fav.story.excerpt_ro,
      image: fav.story.image_url,
      category: fav.story.category?.name,
      author: fav.story.author?.name,
      accessLevel: fav.story.access_level,
      readTime: fav.story.read_time,
      addedAt: fav.created_at,
    }));

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return { data: null, error };
  }
}

/**
 * Verifică dacă o poveste este în favorite
 */
export async function checkIsFavorite(userId, storyId) {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .select("id")
      .eq("user_id", userId)
      .eq("story_id", storyId)
      .maybeSingle();

    if (error) throw error;

    return { data: !!data, error: null };
  } catch (error) {
    console.error("Error checking favorite:", error);
    return { data: false, error };
  }
}

/**
 * Adaugă la favorite
 */
export async function addToFavorites(userId, storyId) {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .insert({ user_id: userId, story_id: storyId })
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return { data: null, error };
  }
}

/**
 * Șterge din favorite
 */
export async function removeFromFavorites(userId, storyId) {
  try {
    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("user_id", userId)
      .eq("story_id", storyId);

    if (error) throw error;

    return { error: null };
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return { error };
  }
}

/**
 * Toggle favorite (adaugă sau șterge)
 */
export async function toggleFavorite(userId, storyId) {
  const { data: isFav } = await checkIsFavorite(userId, storyId);

  if (isFav) {
    return removeFromFavorites(userId, storyId);
  } else {
    return addToFavorites(userId, storyId);
  }
}

// ============================================
// READING HISTORY
// ============================================

/**
 * Obține istoricul de citire
 */
export async function getReadingHistory(userId, language = "ro") {
  try {
    const { data, error } = await supabase
      .from("reading_history")
      .select(
        `
        id,
        last_read_at,
        progress,
        story:stories(
          id,
          title_ro, title_en, title_fr,
          image_url,
          read_time,
          category:categories(name)
        )
      `
      )
      .eq("user_id", userId)
      .order("last_read_at", { ascending: false })
      .limit(10);

    if (error) throw error;

    const transformedData = data.map((item) => ({
      id: item.story.id,
      title: item.story[`title_${language}`] || item.story.title_ro,
      image: item.story.image_url,
      category: item.story.category?.name,
      readTime: item.story.read_time,
      lastReadAt: item.last_read_at,
      progress: item.progress,
    }));

    return { data: transformedData, error: null };
  } catch (error) {
    console.error("Error fetching reading history:", error);
    return { data: null, error };
  }
}

/**
 * Adaugă sau actualizează istoricul de citire
 */
export async function updateReadingHistory(userId, storyId, progress = 0) {
  try {
    const { data, error } = await supabase
      .from("reading_history")
      .upsert(
        {
          user_id: userId,
          story_id: storyId,
          progress,
          last_read_at: new Date().toISOString(),
        },
        { onConflict: "user_id,story_id" }
      )
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error updating reading history:", error);
    return { data: null, error };
  }
}

// ============================================
// USER STATS
// ============================================

/**
 * Obține statisticile utilizatorului
 */
export async function getUserStats(userId) {
  try {
    // Count favorites
    const { count: favoritesCount } = await supabase
      .from("favorites")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);

    // Count stories read
    const { count: storiesRead } = await supabase
      .from("reading_history")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);

    // Count comments
    const { count: commentsCount } = await supabase
      .from("comments")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);

    // Count ratings given
    const { count: ratingsCount } = await supabase
      .from("ratings")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);

    return {
      data: {
        favorites: favoritesCount || 0,
        storiesRead: storiesRead || 0,
        comments: commentsCount || 0,
        ratings: ratingsCount || 0,
      },
      error: null,
    };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return { data: null, error };
  }
}
