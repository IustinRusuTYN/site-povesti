// src/services/authservice.js
const API_BASE = process.env.REACT_APP_API_BASE_URL || ""; // set in .env for real API

function delay(res, ms = 600) {
  return new Promise((resolve) => setTimeout(() => resolve(res), ms));
}

export async function loginRequest(email, password) {
  // mock mode (dev) when no API_BASE or REACT_APP_USE_MOCK = "true"
  if (!API_BASE || process.env.REACT_APP_USE_MOCK === "true") {
    if (!email || !password) {
      return Promise.reject({ message: "Email și parolă sunt necesare." });
    }
    if (email === "fail@example.com") {
      return Promise.reject({ message: "Date incorecte." });
    }
    return delay({
      user: { id: 1, name: "Demo User", email },
      accessToken: "fake.jwt.token",
      refreshToken: "fake.refresh.token",
    });
  }

  // real request
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // if using cookies
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Login failed" }));
    throw err;
  }
  return res.json();
}

export async function signupRequest(name, email, password) {
  if (!API_BASE || process.env.REACT_APP_USE_MOCK === "true") {
    if (!name || !email || !password) {
      return Promise.reject({ message: "Completați toate câmpurile." });
    }
    return delay({
      user: { id: Date.now(), name, email },
      accessToken: "fake.jwt.token",
      refreshToken: "fake.refresh.token",
    });
  }

  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Signup failed" }));
    throw err;
  }
  return res.json();
}

export async function refreshTokenRequest(refreshToken) {
  if (!API_BASE || process.env.REACT_APP_USE_MOCK === "true") {
    return delay({
      accessToken: "fake.jwt.token.refreshed",
      refreshToken: "fake.refresh.token",
    });
  }
  const res = await fetch(`${API_BASE}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Refresh failed");
  return res.json();
}
