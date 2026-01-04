// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

/**
 * Hook pentru acces la auth context
 * Folosește asta în loc de useContext(AuthContext) direct
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default useAuth;
