// src/components/privateroute.js
import React, { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loading, isAuthenticated } = useContext(AuthContext);
  if (loading) return <div className="p-6 text-center">Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
