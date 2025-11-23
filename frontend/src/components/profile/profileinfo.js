// src/components/profile/profileinfo.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProfileInfo({ darkMode, user, logout }) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");

  const handleSave = () => {
    // Aici poți adăuga logica de salvare
    console.log("Salvare:", { name, bio });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Card Principal */}
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            {(user?.name || "U").charAt(0).toUpperCase()}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left w-full">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("profile.namePlaceholder")}
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                />
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder={t("profile.bioPlaceholder")}
                  rows="3"
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                />
              </div>
            ) : (
              <>
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {user?.name || t("profile.defaultName")}
                </h2>
                <p
                  className={`mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {user?.email}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {bio || t("profile.noBio")}
                </p>
              </>
            )}
          </div>

          {/* Butoane */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  {t("profile.save")}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {t("profile.cancel")}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  {t("profile.edit")}
                </button>
                <button
                  onClick={logout}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    darkMode
                      ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                      : "bg-red-50 text-red-600 hover:bg-red-100"
                  }`}
                >
                  {t("profile.logout")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Statistici Rapide */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: t("profile.stats.storiesRead"),
            value: user?.storiesRead || 0,
          },
          { label: t("profile.stats.favorites"), value: user?.favorites || 0 },
          {
            label: t("profile.stats.timeSpent"),
            value: `${user?.timeSpent || 0}h`,
          },
          { label: t("profile.stats.streak"), value: `${user?.streak || 0}d` },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1">
              {stat.value}
            </div>
            <div
              className={`text-xs md:text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
