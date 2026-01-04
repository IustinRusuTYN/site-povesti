// src/components/forms/SignInForm.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { ThemeContext } from "../../context/themecontext";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";
import { Mail, Lock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function SignInForm({ onClose, onSwitchToSignUp }) {
  const { signIn } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

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
        // Erori comune
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
        // Închide form după 1.5 secunde
        setTimeout(() => {
          onClose();
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
        {t("signIn.title", "Welcome Back")}
      </h2>

      {/* Success message */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3 animate-fadeIn">
          <CheckCircle size={20} className="shrink-0" />
          <span className="font-semibold">
            {t("signIn.success", "Signed in successfully!")}
          </span>
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
        {/* Email */}
        <div>
          <label
            className={`block mb-2 font-semibold text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
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
            className={`w-full px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-indigo-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
            } border focus:ring-2 focus:ring-indigo-500/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            placeholder={t("signIn.emailPlaceholder", "john@example.com")}
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
          {t("signIn.button", "Sign In")}
        </Button>
      </form>

      {/* Switch to Sign Up */}
      <p
        className={`mt-6 text-center text-sm ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("signIn.noAccount", "Don't have an account?")}{" "}
        <button
          onClick={onSwitchToSignUp}
          disabled={loading}
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition-colors disabled:opacity-50"
        >
          {t("signIn.signUpLink", "Sign Up")}
        </button>
      </p>
    </div>
  );
}
