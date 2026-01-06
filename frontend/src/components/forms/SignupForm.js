// src/components/forms/SignUpForm.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        // Redirect după 3 secunde
        setTimeout(() => {
          if (onClose) {
            onClose();
          } else {
            navigate("/signin");
          }
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
      className={`relative w-full max-w-md p-8 rounded-3xl transition-all duration-300 border-2 ${
        darkMode
          ? "bg-gray-800 border-gray-600 shadow-2xl shadow-black/50"
          : "bg-white border-gray-200 shadow-2xl shadow-gray-500/20"
      }`}
    >
      {/* Close button - doar dacă e modal */}
      {onClose && (
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${
            darkMode
              ? "hover:bg-gray-700 text-gray-400 hover:text-white"
              : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          aria-label="Close"
        >
          <XCircle size={24} />
        </button>
      )}

      {/* Title */}
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {t("signUp.title", "Create Account")}
      </h2>

      {/* Success message */}
      {success && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-3 animate-fadeIn">
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
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-3 animate-fadeIn">
          <AlertCircle size={20} className="shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <User size={16} className="text-indigo-500" />
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
            className={`w-full px-4 py-3 rounded-xl transition-all border-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400 focus:bg-gray-600"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white"
            } focus:ring-4 focus:ring-indigo-500/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder={t("signUp.fullNamePlaceholder", "John Doe")}
          />
        </div>

        {/* Email */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-500" />
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
            className={`w-full px-4 py-3 rounded-xl transition-all border-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400 focus:bg-gray-600"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white"
            } focus:ring-4 focus:ring-indigo-500/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder={t("signUp.emailPlaceholder", "john@example.com")}
          />
        </div>

        {/* Password */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-indigo-500" />
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
            className={`w-full px-4 py-3 rounded-xl transition-all border-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400 focus:bg-gray-600"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white"
            } focus:ring-4 focus:ring-indigo-500/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder="••••••••"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-indigo-500" />
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
            className={`w-full px-4 py-3 rounded-xl transition-all border-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400 focus:bg-gray-600"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white"
            } focus:ring-4 focus:ring-indigo-500/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
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
          className="mt-6"
        >
          {t("signUp.button", "Create Account")}
        </Button>
      </form>

      {/* Switch to Sign In */}
      <p
        className={`mt-6 text-center text-sm ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {t("signUp.haveAccount", "Already have an account?")}{" "}
        <button
          onClick={() => {
            if (onSwitchToSignIn) {
              onSwitchToSignIn();
            } else {
              navigate("/signin");
            }
          }}
          disabled={loading}
          className="text-indigo-500 dark:text-indigo-400 font-bold hover:underline transition-colors disabled:opacity-50 hover:text-indigo-600 dark:hover:text-indigo-300"
        >
          {t("signUp.signInLink", "Sign In")}
        </button>
      </p>
    </div>
  );
}
