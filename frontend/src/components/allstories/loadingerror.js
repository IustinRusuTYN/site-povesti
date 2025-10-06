import React from "react";

export default function LoadingError({ loading, error }) {
  if (loading) {
    return <p className="text-center">Se încarcă poveștile...</p>;
  }

  if (error) {
    return <p className="text-center text-sm text-gray-400">{error}</p>;
  }

  return null;
}
