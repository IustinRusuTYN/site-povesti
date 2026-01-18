// src/components/forms/SignInForm.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";
import { Mail, Lock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function SignInForm({ onClose, onSwitchToSignUp }) {
  const { signIn } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const LOGO_SRC = "/android-chrome-192x192.png"; // <- schimbă aici dacă vrei alt fișier (ex: "/brand-icon.png")

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await signIn(formData.email, formData.password);

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setError(t("signIn.invalidCredentials", "Invalid email or password"));
        } else if (error.message.includes("Email not confirmed")) {
          setError(
            t(
              "signIn.emailNotConfirmed",
              "Please verify your email before signing in"
            )
          );
        } else {
          setError(error.message);
        }
      } else {
        setSuccess(true);
        setTimeout(() => {
          if (onClose) {
            onClose();
          } else {
            navigate("/");
          }
        }, 1500);
      }
    } catch (err) {
      setError(t("signIn.unexpectedError", "An unexpected error occurred"));
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
      {/* Decorative gradient background */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-10 ${
          darkMode
            ? "bg-gradient-to-br from-gray-700 via-gray-700 to-gray-700"
            : "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400"
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
              darkMode
                ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
            aria-label="Close"
          >
            <XCircle size={24} />
          </button>
        )}

        {/* ✅ Brand Icon */}
        <div className="flex justify-center mb-4">
          <div
            className={`rounded-full p-1 ring-1 ${
              darkMode
                ? "bg-white/10 ring-white/10"
                : "bg-gray-50 ring-black/10"
            }`}
          >
            <img
              src={LOGO_SRC}
              alt="VelvetTales"
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t("signIn.title", "Welcome Back")}
        </h2>

        {/* Success message */}
        {success && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-3 animate-fadeIn">
            <CheckCircle size={20} className="shrink-0" />
            <span className="font-semibold">
              {t("signIn.success", "Signed in successfully!")}
            </span>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-3 animate-fadeIn">
            <AlertCircle size={20} className="shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              className={`block mb-2 font-semibold text-sm ${
                darkMode ? "text-indigo-500" : "text-gray-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Mail size={16} />
                {t("signIn.email", "Email")}
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
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-gray-600"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white"
              } focus:ring-2 focus:ring-indigo-500/30 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
              placeholder={t("signIn.emailPlaceholder", "john@example.com")}
            />
          </div>

          {/* Password */}
          <div>
            <label
              className={`block mb-2 font-semibold text-sm ${
                darkMode ? "text-indigo-500" : "text-gray-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Lock size={16} />
                {t("signIn.password", "Password")}
              </div>
            </label>
            <input
              type="password"
              required
              disabled={loading || success}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-xl transition-all border-2 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-gray-600"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white"
              } focus:ring-2 focus:ring-indigo-500/30 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
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
            {t("signIn.button", "Sign In")}
          </Button>
        </form>

        {/* Switch to Sign Up */}
        <p
          className={`mt-6 text-center text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("signIn.noAccount", "Don't have an account?")}{" "}
          <button
            onClick={() => {
              if (onSwitchToSignUp) {
                onSwitchToSignUp();
              } else {
                navigate("/signup");
              }
            }}
            disabled={loading}
            className={`font-semibold hover:underline transition-colors disabled:opacity-50 ${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-700"
            }`}
          >
            {t("signIn.signUpLink", "Sign Up")}
          </button>
        </p>
      </div>
    </div>
  );
}
