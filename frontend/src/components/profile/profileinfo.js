// src/components/profile/profileinfo.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import {
  Camera,
  Mail,
  Calendar,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ProfileInfo({ darkMode, user, userProfile, logout }) {
  const { t } = useTranslation();
  const { updateProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: userProfile?.full_name || user?.email?.split("@")[0] || "",
    bio: userProfile?.bio || "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Actualizează formData când userProfile se schimbă
    setFormData({
      full_name: userProfile?.full_name || user?.email?.split("@")[0] || "",
      bio: userProfile?.bio || "",
    });
  }, [userProfile, user]);

  const handleSave = async () => {
    if (!formData.full_name.trim()) {
      setError(t("profile.nameRequired", "Name is required"));
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // ✅ DOAR TRIMITEM CÂMPURILE CARE EXISTĂ ÎN TABELA PROFILES
      const updateData = {
        full_name: formData.full_name.trim(),
      };

      // ✅ ADĂUGĂM BIO DOAR DACĂ EXISTĂ COLOANA (după ce ai rulat SQL-ul)
      if (formData.bio.trim()) {
        updateData.bio = formData.bio.trim();
      }

      const { data, error } = await updateProfile(updateData);

      if (error) {
        console.error("Update error:", error);
        setError(
          error.message || t("profile.updateError", "Failed to update profile")
        );
      } else {
        setSuccess(t("profile.updateSuccess", "Profile updated successfully!"));
        setIsEditing(false);

        // ✅ ACTUALIZĂM LOCAL STATE CU DATELE NOI
        if (data) {
          // authContext se ocupă de actualizare automat
          console.log("Profile updated successfully:", data);
        }

        // Ascunde mesajul de succes după 3 secunde
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError(t("profile.updateError", "Failed to update profile"));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      full_name: userProfile?.full_name || user?.email?.split("@")[0] || "",
      bio: userProfile?.bio || "",
    });
    setIsEditing(false);
    setError("");
    setSuccess("");
  };

  const getInitials = () => {
    const name = userProfile?.full_name || user?.email?.split("@")[0] || "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("ro-RO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "N/A";
    }
  };

  const getSubscriptionBadge = () => {
    const plan = userProfile?.subscription_plan || "free";
    const badges = {
      free: { text: "Free", color: "bg-gray-500" },
      basic: { text: "Basic", color: "bg-blue-500" },
      premium: {
        text: "Premium",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      },
    };
    return badges[plan] || badges.free;
  };

  return (
    <div className="space-y-6">
      {/* Mesaje de feedback */}
      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-3">
          <AlertCircle size={20} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-3">
          <CheckCircle size={20} className="shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Card Principal */}
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {getInitials()}
            </div>
            <button
              className={`absolute bottom-0 right-0 p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-colors`}
              title={t("profile.changeAvatar", "Change Avatar")}
            >
              <Camera
                size={16}
                className={darkMode ? "text-gray-300" : "text-gray-600"}
              />
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left w-full">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t("profile.fullName", "Full Name")}
                  </label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
                    placeholder={t(
                      "profile.namePlaceholder",
                      "Enter your full name"
                    )}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400"
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500"
                    } focus:ring-4 focus:ring-indigo-500/20 outline-none`}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t("profile.bio", "Bio")}{" "}
                    <span className="text-xs text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    placeholder={t(
                      "profile.bioPlaceholder",
                      "Tell us about yourself..."
                    )}
                    rows="3"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all resize-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400"
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500"
                    } focus:ring-4 focus:ring-indigo-500/20 outline-none`}
                    disabled={loading}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <h2
                    className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {userProfile?.full_name ||
                      user?.email?.split("@")[0] ||
                      t("profile.defaultName", "User")}
                  </h2>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                      getSubscriptionBadge().color
                    }`}
                  >
                    {getSubscriptionBadge().text}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div
                    className={`flex items-center justify-center md:justify-start gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Mail size={16} />
                    {user?.email}
                  </div>
                  <div
                    className={`flex items-center justify-center md:justify-start gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar size={16} />
                    {t("profile.memberSince", "Member since")}{" "}
                    {formatDate(userProfile?.created_at)}
                  </div>
                  <div
                    className={`flex items-center justify-center md:justify-start gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Shield size={16} />
                    {userProfile?.role === "admin"
                      ? t("profile.admin", "Administrator")
                      : t("profile.user", "User")}
                  </div>
                </div>

                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {userProfile?.bio || t("profile.noBio", "No bio added yet.")}
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
                  disabled={loading}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? t("profile.saving", "Saving...")
                    : t("profile.save", "Save")}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={loading}
                  className={`px-6 py-2 rounded-lg font-medium transition-all disabled:opacity-50 ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {t("profile.cancel", "Cancel")}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  {t("profile.edit", "Edit Profile")}
                </button>
                <button
                  onClick={logout}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    darkMode
                      ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                      : "bg-red-50 text-red-600 hover:bg-red-100"
                  }`}
                >
                  {t("profile.logout", "Sign Out")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Informații Suplimentare */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h3
            className={`font-semibold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("profile.accountDetails", "Account Details")}
          </h3>
          <div className="space-y-2 text-sm">
            <div
              className={`flex justify-between ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span>{t("profile.language", "Language")}:</span>
              <span className="font-medium">
                {userProfile?.preferred_language?.toUpperCase() || "RO"}
              </span>
            </div>
            <div
              className={`flex justify-between ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span>{t("profile.subscription", "Subscription")}:</span>
              <span className="font-medium capitalize">
                {userProfile?.subscription_plan || "free"}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h3
            className={`font-semibold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("profile.preferences", "Preferences")}
          </h3>
          <div className="space-y-2 text-sm">
            <div
              className={`flex justify-between ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span>{t("profile.theme", "Theme")}:</span>
              <span className="font-medium">{darkMode ? "Dark" : "Light"}</span>
            </div>
            <div
              className={`flex justify-between ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span>{t("profile.notifications", "Notifications")}:</span>
              <span className="font-medium">
                {t("profile.enabled", "Enabled")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
