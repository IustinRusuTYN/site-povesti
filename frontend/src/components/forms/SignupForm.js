// src/components/forms/SignUpForm.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Lock,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function SignUpForm({ onClose, onSwitchToSignIn }) {
  const { signUp } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validări client-side
    if (formData.password !== formData.confirmPassword) {
      setError(t("signUp.passwordMismatch", "Passwords don't match"));
      return;
    }

    if (formData.password.length < 6) {
      setError(
        t("signUp.passwordTooShort", "Password must be at least 6 characters")
      );
      return;
    }

    if (!formData.fullName.trim()) {
      setError(t("signUp.nameRequired", "Full name is required"));
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signUp(
        formData.email,
        formData.password,
        formData.fullName
      );

      if (error) {
        // Erori comune de la Supabase
        if (error.message.includes("already registered")) {
          setError(t("signUp.emailExists", "This email is already registered"));
        } else if (error.message.includes("Invalid email")) {
          setError(t("signUp.invalidEmail", "Invalid email format"));
        } else {
          setError(error.message);
        }
      } else {
        setSuccess(true);
        // Închide form după 3 secunde
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (err) {
      setError(t("signUp.unexpectedError", "An unexpected error occurred"));
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative w-full max-w-md p-8 rounded-3xl transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl"
          : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200 shadow-xl"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
          darkMode
            ? "hover:bg-gray-700 text-gray-400 hover:text-white"
            : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
        }`}
        aria-label="Close"
      >
        <XCircle size={24} />
      </button>

      {/* Title */}
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          darkMode ? "text-indigo-400" : "text-gray-800"
        }`}
      >
        {t("signUp.title", "Create Account")}
      </h2>

      {/* Success message */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3 animate-fadeIn">
          <CheckCircle size={20} className="shrink-0" />
          <div>
            <p className="font-semibold">
              {t("signUp.successTitle", "Account created!")}
            </p>
            <p className="text-sm">
              {t(
                "signUp.successMessage",
                "Check your email to verify your account."
              )}
            </p>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-3 animate-fadeIn">
          <AlertCircle size={20} className="shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              {t("signUp.fullName", "Full Name")}
            </div>
          </label>
          <input
            type="text"
            required
            disabled={loading || success}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-indigo-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
            } border focus:ring-2 focus:ring-indigo-500/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder={t("signUp.fullNamePlaceholder", "John Doe")}
          />
        </div>

        {/* Email */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail size={16} />
              {t("signUp.email", "Email")}
            </div>
          </label>
          <input
            type="email"
            required
            disabled={loading || success}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-indigo-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
            } border focus:ring-2 focus:ring-indigo-500/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder={t("signUp.emailPlaceholder", "john@example.com")}
          />
        </div>

        {/* Password */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock size={16} />
              {t("signUp.password", "Password")}
            </div>
          </label>
          <input
            type="password"
            required
            minLength={6}
            disabled={loading || success}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-indigo-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
            } border focus:ring-2 focus:ring-indigo-500/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder="••••••••"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock size={16} />
              {t("signUp.confirmPassword", "Confirm Password")}
            </div>
          </label>
          <input
            type="password"
            required
            minLength={6}
            disabled={loading || success}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-indigo-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
            } border focus:ring-2 focus:ring-indigo-500/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          disabled={loading || success}
        >
          {t("signUp.button", "Create Account")}
        </Button>
      </form>

      {/* Switch to Sign In */}
      <p
        className={`mt-6 text-center text-sm ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("signUp.haveAccount", "Already have an account?")}{" "}
        <button
          onClick={onSwitchToSignIn}
          disabled={loading}
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition-colors disabled:opacity-50"
        >
          {t("signUp.signInLink", "Sign In")}
        </button>
      </p>
    </div>
  );
}
