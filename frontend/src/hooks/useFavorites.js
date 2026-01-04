// src/hooks/useFavorites.js
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "./useAuth";
import {
  getUserFavorites,
  checkIsFavorite,
  toggleFavorite,
} from "../services/userDataService";
import { useTranslation } from "react-i18next";

/**
 * Hook pentru gestionarea favoritelor
 */
export function useFavorites() {
  const { user } = useAuth();
  const { i18n } = useTranslation();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFavorites = useCallback(async () => {
    if (!user?.id) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await getUserFavorites(user.id, i18n.language);

    if (error) {
      setError(error.message);
    } else {
      setFavorites(data || []);
    }

    setLoading(false);
  }, [user?.id, i18n.language]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return { favorites, loading, error, refetch: fetchFavorites };
}

/**
 * Hook pentru a verifica și toggle favorite pentru o poveste
 */
export function useFavoriteStatus(storyId) {
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id || !storyId) {
      setIsFavorite(false);
      setLoading(false);
      return;
    }

    checkIsFavorite(user.id, storyId).then(({ data }) => {
      setIsFavorite(data);
      setLoading(false);
    });
  }, [user?.id, storyId]);

  const toggle = useCallback(async () => {
    if (!user?.id || !storyId) return;

    setLoading(true);
    await toggleFavorite(user.id, storyId);
    setIsFavorite((prev) => !prev);
    setLoading(false);
  }, [user?.id, storyId]);

  return { isFavorite, loading, toggle };
}
