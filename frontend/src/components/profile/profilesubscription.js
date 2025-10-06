// src/components/profile/profilesubscription.js
import React from "react";

export default function ProfileSubscription({ darkMode }) {
  const handleUnsubscribe = () => {
    alert("Te-ai dezabonat cu succes!");
  };

  return (
    <div className="space-y-4 max-w-md">
      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>Status abonament:</strong> Activ
      </p>
      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>Metoda de plată:</strong> Card Visa ****1234
      </p>
      <button
        onClick={handleUnsubscribe}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Dezabonare
      </button>
    </div>
  );
}
