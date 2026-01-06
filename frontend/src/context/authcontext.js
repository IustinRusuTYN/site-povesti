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

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // auth.users user
  const [userProfile, setUserProfile] = useState(null); // profiles row
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId) => {
    try {
      const res = await withTimeout(
        supabase
          .from("profiles")
          .select("id, subscription_plan, role, created_at")
          .eq("id", userId)
          .maybeSingle(),
        12000,
        "fetchProfile"
      );

      if (res?.__timeout) {
        console.warn("[auth] fetchProfile timeout");
        setUserProfile(null);
        return null;
      }

      const { data, error } = res;

      if (error) {
        console.warn("[auth] profile fetch:", error.message);
        setUserProfile(null);
        return null;
      }

      setUserProfile(data || null);
      return data || null;
    } catch (err) {
      console.warn("[auth] profile fetch crash:", err?.message || err);
      setUserProfile(null);
      return null;
    }
  };

  const refreshProfile = async () => {
    if (!user?.id) return;
    await fetchUserProfile(user.id);
  };

  const forceLocalLogout = async () => {
    // UI instant
    setUser(null);
    setUserProfile(null);

    // încercăm să scoatem sesiunea local (supabase-js v2)
    try {
      await supabase.auth.signOut({ scope: "local" });
    } catch {
      // ignore
    }

    // fallback: ștergem manual token-ul
    clearSupabaseAuthStorage();
  };

  const validateSession = async () => {
    // 1) session din storage
    const sessionRes = await withTimeout(
      supabase.auth.getSession(),
      12000,
      "getSession"
    );

    if (sessionRes?.__timeout) {
      console.warn("[auth] getSession timeout");
      // Nu ținem UI blocat; considerăm neautentificat până revine
      setUser(null);
      setUserProfile(null);
      return;
    }

    const sessionUser = sessionRes?.data?.session?.user ?? null;

    if (!sessionUser) {
      setUser(null);
      setUserProfile(null);
      return;
    }

    // 2) confirmăm userul pe server (acoperă cazul în care userul a fost șters)
    const userRes = await withTimeout(
      supabase.auth.getUser(),
      12000,
      "getUser"
    );

    if (userRes?.__timeout) {
      console.warn("[auth] getUser timeout (keeping local session for now)");
      // păstrăm user local, dar fără profile (ca să nu blocăm)
      setUser(sessionUser);
      setUserProfile(null);
      return;
    }

    if (userRes?.error || !userRes?.data?.user) {
      console.warn("[auth] invalid session -> force local logout");
      await forceLocalLogout();
      return;
    }

    setUser(userRes.data.user);
    await fetchUserProfile(userRes.data.user.id);
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      setLoading(true);
      try {
        await validateSession();
      } finally {
        if (mounted) setLoading(false);
      }
    };

    init();

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Nu blocăm UI; doar actualizăm state.
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

        // Setăm imediat user local ca UI să se actualizeze rapid
        setUser(sessionUser);
        setLoading(false);

        // În background: validăm user și luăm profile
        await validateSession();
      }
    );

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = async (email, password, fullName) => {
    try {
      const res = await withTimeout(
        supabase.auth.signUp({
          email,
          password,
          options: { data: fullName ? { full_name: fullName } : undefined },
        }),
        15000,
        "signUp"
      );

      if (res?.__timeout) {
        return { data: null, error: res.error };
      }

      if (res?.error) throw res.error;
      return { data: res.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signIn = async (email, password) => {
    try {
      const res = await withTimeout(
        supabase.auth.signInWithPassword({ email, password }),
        15000,
        "signIn"
      );

      if (res?.__timeout) {
        return { data: null, error: res.error };
      }

      if (res?.error) throw res.error;
      return { data: res.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signOut = async () => {
    // Logout “garantat”:
    // - curățăm local indiferent dacă server-side signOut reușește sau nu
    try {
      const res = await withTimeout(supabase.auth.signOut(), 12000, "signOut");

      // chiar dacă timeout/eroare, tot curățăm local
      await forceLocalLogout();

      if (res?.__timeout) return { error: res.error };
      if (res?.error) return { error: res.error };

      return { error: null };
    } catch (error) {
      await forceLocalLogout();
      return { error };
    }
  };

  const updateProfile = async (updates) => {
    try {
      if (!user?.id) return { data: null, error: "No user logged in" };

      // ✅ DEBUG COMPLET
      const currentAuthUser = await supabase.auth.getUser();
      console.log("🔍 Context user.id:", user.id);
      console.log("🔍 Auth user.id:", currentAuthUser.data.user?.id);
      console.log("🔍 Are egale?", user.id === currentAuthUser.data.user?.id);
      console.log("🔍 Updates:", updates);

      const safeUpdates = { ...updates };
      delete safeUpdates.subscription_plan;
      delete safeUpdates.role;

      // ✅ TESTEAZĂ MANUAL QUERY-UL
      console.log("🔍 Executing query with user.id:", user.id);

      const res = await withTimeout(
        supabase
          .from("profiles")
          .update(safeUpdates)
          .eq("id", user.id)
          .select()
          .maybeSingle(),
        12000,
        "updateProfile"
      );

      if (res?.__timeout) return { data: null, error: res.error };

      const { data, error } = res;

      console.log("✅ Supabase response data:", data);
      console.log("✅ Supabase response error:", error);

      if (error) throw error;

      // ✅ VERIFICĂ CE S-A ACTUALIZAT EFECTIV
      const allProfiles = await supabase
        .from("profiles")
        .select("id, email, full_name");
      console.log("🔍 All profiles after update:", allProfiles.data);

      if (data) {
        setUserProfile(data);
      }

      return { data, error: null };
    } catch (error) {
      console.error("❌ Update profile error:", error);
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
      logout: signOut, // compatibil cu codul tău vechi
      updateProfile,
      refreshProfile,
      hasAccess,
    }),
    [user, userProfile, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
