import React, { createContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext();

const STORAGE_KEY = "app_auth_v1";
const USERS_KEY = "app_users_v1";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Încarcă user la start
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setAccessToken(parsed.accessToken || null);
        setRefreshToken(parsed.refreshToken || null);
      }
    } catch (err) {
      console.warn("Auth load failed", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Salvează user în storage
  const persist = (payload, remember = true) => {
    const json = JSON.stringify(payload);
    if (remember) localStorage.setItem(STORAGE_KEY, json);
    else sessionStorage.setItem(STORAGE_KEY, json);
  };

  // Fake API local pentru login
  const login = async (email, password, remember = true) => {
    setLoading(true);
    setError(null);
    try {
      const usersRaw = localStorage.getItem(USERS_KEY) || "[]";
      const users = JSON.parse(usersRaw);

      const found = users.find((u) => u.email === email);

      if (!found) throw new Error("Email-ul nu există!");
      if (found.password !== password) throw new Error("Parolă incorectă!");

      const token = Math.random().toString(36).substr(2);

      // 🔹 MODIFICARE: adaugă subscriptionPlan
      const userData = {
        name: found.name,
        email: found.email,
        subscriptionPlan: found.subscriptionPlan || "free", // 🔥 IMPORTANT
      };

      setUser(userData);
      setAccessToken(token);
      setRefreshToken(token);
      persist(
        {
          user: userData,
          accessToken: token,
          refreshToken: token,
        },
        remember
      );
      setLoading(false);
      return {
        user: userData,
        accessToken: token,
        refreshToken: token,
      };
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  // Fake API local pentru signup
  const signup = async (name, email, password, remember = true) => {
    setLoading(true);
    setError(null);
    try {
      const usersRaw = localStorage.getItem(USERS_KEY) || "[]";
      const users = JSON.parse(usersRaw);

      if (users.find((u) => u.email === email))
        throw new Error("Email deja înregistrat!");

      // 🔹 MODIFICARE: adaugă subscriptionPlan implicit "free"
      const newUser = {
        name,
        email,
        password,
        subscriptionPlan: "free", // 🔥 default free la signup
      };
      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      const token = Math.random().toString(36).substr(2);
      const userData = { name, email, subscriptionPlan: "free" };

      setUser(userData);
      setAccessToken(token);
      setRefreshToken(token);
      persist(
        { user: userData, accessToken: token, refreshToken: token },
        remember
      );
      setLoading(false);
      return { user: userData, accessToken: token, refreshToken: token };
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  const logout = useCallback(() => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    setError(null);
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        loading,
        error,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
