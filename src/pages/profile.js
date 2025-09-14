// src/pages/profile.js
import React, { useContext, useState, useEffect } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import stories from "../data/stories";
import { Link } from "react-router-dom";

export default function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const [recentStories, setRecentStories] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [activeTab, setActiveTab] = useState("info"); // info, recent, rec, subscription

  // Formular reset parola
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentStories")) || [];
    setRecentStories(saved);

    const shuffled = [...stories].sort(() => 0.5 - Math.random()).slice(0, 4);
    setRecommended(shuffled);
  }, []);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Parolele nu coincid!");
      return;
    }
    setMessage("Parola a fost schimbată cu succes!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleUnsubscribe = () => {
    // Aici se poate integra API dezabonare
    alert("Te-ai dezabonat cu succes!");
  };

  const tabs = [
    { id: "info", label: "Informații cont" },
    { id: "recent", label: "Povești recente" },
    { id: "rec", label: "Recomandări" },
    { id: "subscription", label: "Abonament" },
  ];

  return (
    <PageLayout>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Profilul tău
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeTab === "info" && (
          <div className="mb-10 space-y-4">
            <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              <strong>Nume:</strong> {user?.name}
            </p>
            <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              <strong>Email:</strong> {user?.email}
            </p>

            {/* Reset Password */}
            <form
              className="flex flex-col space-y-3 max-w-md mt-4"
              onSubmit={handlePasswordReset}
            >
              <h2
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Schimbă parola
              </h2>
              {message && (
                <p
                  className={`${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {message}
                </p>
              )}
              <input
                type="password"
                placeholder="Parola curentă"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className={`px-3 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
              <input
                type="password"
                placeholder="Parola nouă"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`px-3 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
              <input
                type="password"
                placeholder="Confirmă parola nouă"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`px-3 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Schimbă parola
              </button>
            </form>

            <button
              onClick={logout}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}

        {activeTab === "recent" && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {recentStories.length > 0 ? (
              recentStories.map((story) => (
                <Link
                  key={story.id}
                  to={`/story/${story.id}`}
                  className={`block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3
                      className={`font-semibold ${
                        darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {story.title}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Nu ai vizualizat încă nicio poveste.
              </p>
            )}
          </div>
        )}

        {activeTab === "rec" && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {recommended.map((story) => (
              <Link
                key={story.id}
                to={`/story/${story.id}`}
                className={`block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {story.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "subscription" && (
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
        )}
      </section>
    </PageLayout>
  );
}
