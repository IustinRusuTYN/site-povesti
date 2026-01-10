import React, { createContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../utils/supabase";

export const AuthContext = createContext({
  user: null,
  userProfile: null,
  loading: true,
  isAuthenticated: false,
  signUp: async () => ({ data: null, error: null }),
  signIn: async () => ({ data: null, error: null }),
  signOut: async () => ({ error: null }),
  logout: async () => ({ error: null }),
  updateProfile: async () => ({ data: null, error: null }),
  refreshProfile: async () => {},
  hasAccess: () => false,
});

const NETWORK_TIMEOUT_MS = 15000;

// ---------- timeout helper (nu blochează UI infinit) ----------
function withTimeout(promise, ms, label = "request") {
  let timer;
  const timeoutPromise = new Promise((resolve) => {
    timer = setTimeout(() => {
      resolve({
        __timeout: true,
        error: new Error(`${label} timed out after ${ms}ms`),
      });
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]).finally(() =>
    clearTimeout(timer)
  );
}

// ---------- supabase auth local storage cleanup ----------
function getSupabaseAuthStorageKeys() {
  try {
    return Object.keys(localStorage).filter(
      (k) => k.startsWith("sb-") && k.includes("auth-token")
    );
  } catch {
    return [];
  }
}

function clearSupabaseAuthStorage() {
  try {
    getSupabaseAuthStorageKeys().forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

// ---------- profile cache (ca să apară instant după refresh) ----------
const PROFILE_CACHE_PREFIX = "profile_cache_v1_";
const profileCacheKey = (userId) => `${PROFILE_CACHE_PREFIX}${userId}`;

function readCachedProfile(userId) {
  try {
    const raw = localStorage.getItem(profileCacheKey(userId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeCachedProfile(userId, profile) {
  try {
    localStorage.setItem(profileCacheKey(userId), JSON.stringify(profile));
  } catch {
    // ignore
  }
}

function clearAllProfileCache() {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PROFILE_CACHE_PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profil cu timeout, dar IMPORTANT: la timeout NU setăm profile null
  const fetchUserProfile = async (userId) => {
    const res = await withTimeout(
      supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
      NETWORK_TIMEOUT_MS,
      "fetchProfile"
    );

    if (res?.__timeout) {
      console.warn("[auth] fetchProfile timeout");
      return { data: null, error: res.error };
    }

    const { data, error } = res;
    if (error) return { data: null, error };

    if (data) {
      setUserProfile(data);
      writeCachedProfile(userId, data);
    }

    return { data: data || null, error: null };
  };

  const ensureProfileRow = async (sessionUser) => {
    try {
      if (!sessionUser?.id) return { data: null, error: null };

      const fallbackName =
        sessionUser.user_metadata?.full_name ||
        sessionUser.email?.split("@")[0] ||
        "User";

      const res = await withTimeout(
        supabase
          .from("profiles")
          .upsert(
            {
              id: sessionUser.id,
              full_name: fallbackName,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "id" }
          )
          .select("*")
          .single(),
        NETWORK_TIMEOUT_MS,
        "ensureProfileRow"
      );

      if (res?.__timeout) return { data: null, error: res.error };

      if (res.error) return { data: null, error: res.error };

      setUserProfile(res.data);
      writeCachedProfile(sessionUser.id, res.data);
      return { data: res.data, error: null };
    } catch (e) {
      return { data: null, error: e };
    }
  };

  // NU blocăm UI: sincronizăm în background
  const syncProfileInBackground = (sessionUser) => {
    (async () => {
      const { data } = await fetchUserProfile(sessionUser.id);
      if (!data) {
        await ensureProfileRow(sessionUser);
      }
    })();
  };

  const refreshProfile = async () => {
    if (!user?.id) return;
    await fetchUserProfile(user.id);
  };

  const forceLocalLogout = async () => {
    setUser(null);
    setUserProfile(null);

    try {
      await supabase.auth.signOut({ scope: "local" });
    } catch {
      // ignore
    }

    clearSupabaseAuthStorage();
    clearAllProfileCache();
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      setLoading(true);
      try {
        // getSession e local; nu-l mai punem în timeout
        const sessionRes = await supabase.auth.getSession();
        const sessionUser = sessionRes?.data?.session?.user ?? null;

        if (!mounted) return;

        if (!sessionUser) {
          setUser(null);
          setUserProfile(null);
          return;
        }

        // 1) user imediat
        setUser(sessionUser);

        // 2) profil imediat din cache (instant)
        const cached = readCachedProfile(sessionUser.id);
        if (cached) setUserProfile(cached);

        // 3) DB în background (nu blocăm UI)
        syncProfileInBackground(sessionUser);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    init();

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        if (event === "SIGNED_OUT") {
          setUser(null);
          setUserProfile(null);
          setLoading(false);
          return;
        }

        const sessionUser = session?.user ?? null;

        if (!sessionUser) {
          setUser(null);
          setUserProfile(null);
          setLoading(false);
          return;
        }

        setUser(sessionUser);

        const cached = readCachedProfile(sessionUser.id);
        if (cached) setUserProfile(cached);

        setLoading(false);
        syncProfileInBackground(sessionUser);
      }
    );

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (email, password, fullName) => {
    try {
      const res = await withTimeout(
        supabase.auth.signUp({
          email,
          password,
          options: { data: fullName ? { full_name: fullName } : undefined },
        }),
        NETWORK_TIMEOUT_MS,
        "signUp"
      );

      if (res?.__timeout) return { data: null, error: res.error };
      if (res?.error) throw res.error;

      const newUser = res.data?.user;
      if (newUser?.id) {
        // nu blocăm UI, dar încercăm să creăm profilul
        ensureProfileRow(newUser);
      }

      return { data: res.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signIn = async (email, password) => {
    try {
      const res = await withTimeout(
        supabase.auth.signInWithPassword({ email, password }),
        NETWORK_TIMEOUT_MS,
        "signIn"
      );

      if (res?.__timeout) return { data: null, error: res.error };
      if (res?.error) throw res.error;

      return { data: res.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  // IMPORTANT: logout instant local, server-side în background
  const signOut = async () => {
    await forceLocalLogout();

    // încercare server-side fără să blocăm
    supabase.auth.signOut().catch(() => {});

    return { error: null };
  };

  const updateProfile = async (updates) => {
    try {
      if (!user?.id)
        return { data: null, error: { message: "No user logged in" } };

      const safeUpdates = { ...updates };
      delete safeUpdates.subscription_plan;
      delete safeUpdates.role;

      const payload = {
        id: user.id,
        ...safeUpdates,
        updated_at: new Date().toISOString(),
      };

      const res = await withTimeout(
        supabase
          .from("profiles")
          .upsert(payload, { onConflict: "id" })
          .select("*")
          .single(),
        NETWORK_TIMEOUT_MS,
        "updateProfile"
      );

      if (res?.__timeout) return { data: null, error: res.error };

      const { data, error } = res;
      if (error) throw error;

      setUserProfile(data);
      writeCachedProfile(user.id, data);

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const hasAccess = (requiredPlan) => {
    const plan = userProfile?.subscription_plan || "free";
    if (requiredPlan === "free") return true;
    if (requiredPlan === "basic") return plan === "basic" || plan === "premium";
    if (requiredPlan === "premium") return plan === "premium";
    return false;
  };

  const value = useMemo(
    () => ({
      user,
      userProfile,
      loading,
      isAuthenticated: !!user,
      signUp,
      signIn,
      signOut,
      logout: signOut,
      updateProfile,
      refreshProfile,
      hasAccess,
    }),
    [user, userProfile, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
