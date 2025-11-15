// src/components/profile/profileinfo.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProfileInfo({ darkMode, user, logout }) {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage(t("profilePage.info.errorMismatch"));
      return;
    }

    setMessage(t("profilePage.info.successChanged"));
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mb-10 space-y-4">
      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>{t("profilePage.info.name")}:</strong> {user?.name}
      </p>

      <p className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <strong>{t("profilePage.info.email")}:</strong> {user?.email}
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
          {t("profilePage.info.changePasswordTitle")}
        </h2>

        {message && (
          <p className={`${darkMode ? "text-green-400" : "text-green-600"}`}>
            {message}
          </p>
        )}

        <input
          type="password"
          placeholder={t("profilePage.info.currentPassword")}
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
          placeholder={t("profilePage.info.newPassword")}
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
          placeholder={t("profilePage.info.confirmPassword")}
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
          {t("profilePage.info.changePasswordBtn")}
        </button>
      </form>

      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        {t("profilePage.info.logout")}
      </button>
    </div>
  );
}
