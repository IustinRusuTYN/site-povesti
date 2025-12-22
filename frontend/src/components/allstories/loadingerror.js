// src/components/allstories/loadingerror.js
import React from "react";
import { Loader2 } from "lucide-react";

export default function LoadingError({ loading, error, darkMode }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Loader2
          className={`animate-spin mb-3 ${
            darkMode ? "text-purple-400" : "text-purple-600"
          }`}
          size={40}
        />
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Se încarcă poveștile...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          ⚠️ {error}
        </p>
      </div>
    );
  }

  return null;
}
