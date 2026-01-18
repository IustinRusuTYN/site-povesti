import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useTranslation } from "react-i18next";
import {
  Mail,
  MessageSquareText,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";
import Button from "../components/buttons/Button";

import SignInForm from "../components/forms/SignInForm";
import SignUpForm from "../components/forms/SignupForm";

export default function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  const supportEmail = "iustin_busted@yahoo.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // honeypot anti-spam
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  // ✅ modal auth
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // 'signin' | 'signup'

  const openAuth = (mode = "signin") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(false);
    setServerError("");

    // ✅ blocăm trimiterea dacă nu e logat
    if (!isAuthenticated) {
      openAuth("signin");
      return;
    }

    // honeypot (în caz că ajunge aici)
    if (form.hp) {
      setSent(true);
      return;
    }

    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    if (!supabaseUrl) {
      setServerError("Missing REACT_APP_SUPABASE_URL");
      return;
    }

    setSending(true);

    try {
      // IMPORTANT: endpointul corect pt Edge Functions (evită probleme CORS)
      const functionsBase = supabaseUrl.replace(
        ".supabase.co",
        ".functions.supabase.co"
      );
      const endpoint = `${functionsBase}/contact`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          locale: i18n.language,
          website: typeof window !== "undefined" ? window.location.href : "",
          hp: form.hp,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data?.error || "Failed to send message");
        setSending(false);
        return;
      }

      setSent(true);
      setForm({ name: "", email: "", message: "", hp: "" });
    } catch (err) {
      setServerError("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      {/* ✅ Auth modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          {authMode === "signin" ? (
            <SignInForm
              onClose={() => setShowAuthModal(false)}
              onSwitchToSignUp={() => setAuthMode("signup")}
            />
          ) : (
            <SignUpForm
              onClose={() => setShowAuthModal(false)}
              onSwitchToSignIn={() => setAuthMode("signin")}
            />
          )}
        </div>
      )}

      <section
        className={`min-h-screen py-10 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className={`rounded-2xl p-6 sm:p-8 border ${
              darkMode
                ? "bg-gray-800/60 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`p-2 rounded-xl ${
                  darkMode ? "bg-indigo-600/20" : "bg-indigo-100"
                }`}
              >
                <MessageSquareText
                  className={darkMode ? "text-indigo-300" : "text-indigo-700"}
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold">
                {t("contact.title")}
              </h1>
            </div>

            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {t("contact.subtitle")}
            </p>

            {/* Success / Error */}
            {sent && (
              <div
                className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode
                    ? "bg-green-500/10 border-green-500/30 text-green-200"
                    : "bg-green-50 border-green-200 text-green-800"
                }`}
              >
                <CheckCircle className="mt-0.5" size={18} />
                <div className="text-sm">
                  {t(
                    "contact.sentOk",
                    "Mesajul a fost trimis. Îți răspundem cât de repede putem."
                  )}
                </div>
              </div>
            )}

            {serverError && (
              <div
                className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode
                    ? "bg-red-500/10 border-red-500/30 text-red-200"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <AlertCircle className="mt-0.5" size={18} />
                <div className="text-sm">
                  {t(
                    "contact.sentError",
                    "Nu am putut trimite mesajul. Încearcă din nou sau scrie-ne pe email."
                  )}
                </div>
              </div>
            )}

            {/* Email card */}
            <div
              className={`mt-6 flex items-center gap-3 p-4 rounded-xl border ${
                darkMode
                  ? "bg-gray-900/40 border-white/10"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <Mail
                className={darkMode ? "text-indigo-300" : "text-indigo-700"}
              />
              <div className="text-sm">
                <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {t("contact.emailLabel")}
                </div>
                <a
                  className="font-semibold hover:underline underline-offset-4"
                  href={`mailto:${supportEmail}`}
                >
                  {supportEmail}
                </a>
              </div>
            </div>

            <p
              className={`mt-4 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {t("contact.note18")}
            </p>

            <hr
              className={`my-8 ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}
            />

            <h2 className="text-lg font-bold mb-4">{t("contact.formTitle")}</h2>

            {/* ✅ Gate: neautentificat */}
            {!isAuthenticated && (
              <div
                className={`mb-5 p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode
                    ? "bg-indigo-500/10 border-indigo-500/30 text-gray-200"
                    : "bg-indigo-50 border-indigo-200 text-gray-800"
                }`}
              >
                <Lock className="mt-0.5" size={18} />
                <div className="text-sm">
                  <div className="font-semibold">
                    {t("contact.authRequiredTitle", "Autentificare necesară")}
                  </div>
                  <div className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    {t(
                      "contact.authRequiredBody",
                      "Pentru a ne trimite un mesaj, te rugăm să te autentifici sau să îți creezi un cont."
                    )}
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => openAuth("signin")}
                    >
                      {t("contact.signIn", "Sign In")}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="md"
                      onClick={() => openAuth("signup")}
                    >
                      {t("contact.signUp", "Sign Up")}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot invizibil */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.hp}
                onChange={(e) => setForm({ ...form, hp: e.target.value })}
                className="hidden"
              />

              <div>
                <label
                  className={`text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {t("contact.form.name")}
                </label>
                <input
                  value={form.name}
                  disabled={sending || !isAuthenticated}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-2 w-full px-4 py-3 rounded-xl border-2 outline-none transition disabled:opacity-60 disabled:cursor-not-allowed ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400"
                      : "bg-white border-gray-200 text-gray-900 focus:border-indigo-500"
                  }`}
                  placeholder={t("contact.form.namePlaceholder")}
                  onFocus={() => {
                    if (!isAuthenticated) openAuth("signin");
                  }}
                />
              </div>

              <div>
                <label
                  className={`text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  disabled={sending || !isAuthenticated}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-2 w-full px-4 py-3 rounded-xl border-2 outline-none transition disabled:opacity-60 disabled:cursor-not-allowed ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400"
                      : "bg-white border-gray-200 text-gray-900 focus:border-indigo-500"
                  }`}
                  placeholder={t("contact.form.emailPlaceholder")}
                  onFocus={() => {
                    if (!isAuthenticated) openAuth("signin");
                  }}
                />
              </div>

              <div>
                <label
                  className={`text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  disabled={sending || !isAuthenticated}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`mt-2 w-full px-4 py-3 rounded-xl border-2 outline-none transition resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-400"
                      : "bg-white border-gray-200 text-gray-900 focus:border-indigo-500"
                  }`}
                  placeholder={t("contact.form.messagePlaceholder")}
                  onFocus={() => {
                    if (!isAuthenticated) openAuth("signin");
                  }}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={sending}
                disabled={sending}
                onClick={(e) => {
                  if (!isAuthenticated) {
                    e.preventDefault();
                    openAuth("signin");
                  }
                }}
              >
                {sending
                  ? t("contact.sending", "Se trimite...")
                  : t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
