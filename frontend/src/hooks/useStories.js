// src/hooks/useStories.js
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  getAllStories,
  getFeaturedStories,
  getStoryById,
  getStoriesByCategory,
  searchStories,
  getAllCategories,
  getStoryRating,
  getStoryComments,
} from "../services/storiesService";

/**
 * Hook pentru toate poveștile
 * includeRatings = true -> atașează avg_rating și rating_count pentru fiecare story
 */
export function useStories(options = {}) {
  const { includeRatings = false } = options;

  const { i18n } = useTranslation();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStories = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await getAllStories(i18n.language);

    if (error) {
      setError(error.message || "Failed to fetch stories");
      setStories([]);
      setLoading(false);
      return;
    }

    const baseStories = data || [];
    setStories(baseStories);
    setLoading(false);

    // IMPORTANT: ratings pe listă (fără să blochezi afișarea)
    if (!includeRatings || baseStories.length === 0) return;

    try {
      // Facem request-uri pe bucăți ca să nu "îngropăm" Supabase
      const chunkSize = 25;
      const enriched = [];

      for (let i = 0; i < baseStories.length; i += chunkSize) {
        const chunk = baseStories.slice(i, i + chunkSize);

        const results = await Promise.allSettled(
          chunk.map((s) =>
            s?.id ? getStoryRating(s.id) : Promise.resolve({ data: null })
          )
        );

        chunk.forEach((s, idx) => {
          const res = results[idx];
          const ratingData =
            res.status === "fulfilled" ? res.value?.data : null;

          const avg =
            typeof ratingData?.average === "number" ? ratingData.average : 0;
          const count =
            typeof ratingData?.count === "number" ? ratingData.count : 0;

          enriched.push({
            ...s,
            avg_rating: count > 0 ? Number(avg.toFixed(1)) : null,
            rating_count: count,
          });
        });
      }

      setStories(enriched);
    } catch {
      // dacă pică rating-ul, rămâi măcar cu lista de stories (nu stricăm pagina)
    }
  }, [i18n.language, includeRatings]);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  return { stories, loading, error, refetch: fetchStories };
}

/**
 * Hook pentru poveștile featured (pool mai mare + random la fiecare refresh)
 * - ia featured
 * - dacă sunt prea puține, completează din toate poveștile
 * - alege random ~12 (fără duplicate)
 */
export function useFeaturedStories() {
  const { i18n } = useTranslation();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DESIRED_COUNT = 12;

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const uniqueById = (arr) => {
    const map = new Map();
    for (const s of arr || []) {
      if (s?.id && !map.has(s.id)) map.set(s.id, s);
    }
    return Array.from(map.values());
  };

  useEffect(() => {
    let mounted = true;

    async function fetch() {
      setLoading(true);
      setError(null);

      // 1) featured
      const featuredRes = await getFeaturedStories(i18n.language);
      if (!mounted) return;

      if (featuredRes?.error) {
        setError(
          featuredRes.error.message || "Failed to fetch featured stories"
        );
        setStories([]);
        setLoading(false);
        return;
      }

      let pool = Array.isArray(featuredRes?.data) ? featuredRes.data : [];

      // 2) dacă featured sunt puține, completează din toate
      if (pool.length < DESIRED_COUNT) {
        const allRes = await getAllStories(i18n.language);
        if (!mounted) return;

        if (!allRes?.error && Array.isArray(allRes?.data)) {
          pool = uniqueById([...pool, ...allRes.data]);
        } else {
          pool = uniqueById(pool);
        }
      } else {
        pool = uniqueById(pool);
      }

      // 3) randomizează și ia 12
      const random12 = shuffle(pool).slice(
        0,
        Math.min(DESIRED_COUNT, pool.length)
      );

      setStories(random12);
      setLoading(false);
    }

    fetch();
    return () => {
      mounted = false;
    };
  }, [i18n.language]);

  return { stories, loading, error };
}

/**
 * Hook pentru o singură poveste
 */
export function useStory(id) {
  const { i18n } = useTranslation();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (!id) {
      setLoading(false);
      return;
    }

    async function fetch() {
      setLoading(true);
      setError(null);

      const { data, error } = await getStoryById(id, i18n.language);

      if (!mounted) return;

      if (error) {
        setError(error.message || "Story not found");
        setStory(null);
      } else {
        setStory(data);
      }

      setLoading(false);
    }

    fetch();

    return () => {
      mounted = false;
    };
  }, [id, i18n.language]);

  return { story, loading, error };
}

/**
 * Hook pentru povești după categorie
 */
export function useStoriesByCategory(categorySlug) {
  const { i18n } = useTranslation();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetch() {
      setLoading(true);
      setError(null);

      const { data, error } =
        !categorySlug || categorySlug === "all"
          ? await getAllStories(i18n.language)
          : await getStoriesByCategory(categorySlug, i18n.language);

      if (!mounted) return;

      if (error) {
        setError(error.message || "Failed to fetch stories");
        setStories([]);
      } else {
        setStories(data || []);
      }

      setLoading(false);
    }

    fetch();

    return () => {
      mounted = false;
    };
  }, [categorySlug, i18n.language]);

  return { stories, loading, error };
}

/**
 * Hook pentru căutare
 */
export function useSearchStories(query) {
  const { i18n } = useTranslation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (!query || query.length < 2) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await searchStories(query, i18n.language);

      if (!mounted) return;

      if (error) {
        setError(error.message || "Search failed");
        setResults([]);
      } else {
        setResults(data || []);
      }

      setLoading(false);
    }, 300);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [query, i18n.language]);

  return { results, loading, error };
}

/**
 * Hook pentru categorii
 */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetch() {
      setLoading(true);
      setError(null);

      const { data, error } = await getAllCategories();

      if (!mounted) return;

      if (error) {
        setError(error.message || "Failed to fetch categories");
        setCategories([]);
      } else {
        setCategories(data || []);
      }

      setLoading(false);
    }

    fetch();

    return () => {
      mounted = false;
    };
  }, []);

  return { categories, loading, error };
}

/**
 * Hook pentru rating-ul unei povești
 */
export function useStoryRating(storyId) {
  const [rating, setRating] = useState({ average: 0, count: 0, ratings: [] });
  const [loading, setLoading] = useState(true);

  const fetchRating = useCallback(async () => {
    if (!storyId) return;

    const { data } = await getStoryRating(storyId);
    if (data) setRating(data);

    setLoading(false);
  }, [storyId]);

  useEffect(() => {
    fetchRating();
  }, [fetchRating]);

  return { rating, loading, refetch: fetchRating };
}

/**
 * Hook pentru comentariile unei povești
 */
export function useStoryComments(storyId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    if (!storyId) return;

    const { data } = await getStoryComments(storyId);
    setComments(data || []);
    setLoading(false);
  }, [storyId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return { comments, loading, refetch: fetchComments };
}
