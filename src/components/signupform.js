// src/components/SignupForm.js
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authcontext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignupForm({ onClose }) {
  const { signup, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => generateCaptcha(), []);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword || !securityAnswer) {
      setError("Completează toate câmpurile!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email invalid!");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Parola trebuie să aibă minim 8 caractere, o literă mare, una mică și un număr."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Parolele nu coincid!");
      return;
    }
    if (parseInt(securityAnswer) !== num1 + num2) {
      setError("Răspunsul la întrebarea de securitate este greșit!");
      generateCaptcha();
      return;
    }

    try {
      await signup(name, email, password, rememberMe);
      setSuccess("Înregistrare realizată cu succes!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSecurityAnswer("");
      generateCaptcha();
      if (onClose) onClose();
    } catch (err) {
      setError(err.message || "Eroare la înregistrare!");
      generateCaptcha();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 font-bold text-xl"
        onClick={onClose}
        aria-label="Închide formularul"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Creează cont</h2>

      {error && <p className="text-red-500 font-medium mb-3">{error}</p>}
      {success && <p className="text-green-500 font-medium mb-3">{success}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name with suggestions */}
        <label className="block">
          <input
            type="text"
            placeholder="Nume"
            value={name}
            onChange={(e) => setName(e.target.value)}
            list="name-suggestions"
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
            required
          />
          <datalist id="name-suggestions">
            <option value="Andrei" />
            <option value="Maria" />
            <option value="Ioana" />
            <option value="Alex" />
            <option value="Cristina" />
          </datalist>
        </label>

        {/* Email with suggestions */}
        <label className="block">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            list="email-suggestions"
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
            required
          />
          <datalist id="email-suggestions">
            <option value="andrei@example.com" />
            <option value="maria@example.com" />
            <option value="ioana@example.com" />
            <option value="alex@example.com" />
            <option value="cristina@example.com" />
          </datalist>
        </label>

        {/* Passwords */}
        <label className="block">
          <input
            type="password"
            placeholder="Parolă"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
            required
          />
        </label>

        <label className="block">
          <input
            type="password"
            placeholder="Confirmă parola"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
            required
          />
        </label>

        {/* Security Question */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold">
            {num1} + {num2} = ?
          </span>
          <input
            type="number"
            placeholder="Răspuns"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            className="w-24 px-3 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label className="text-gray-700 dark:text-gray-300 text-sm">
            Păstrează-mă autentificat
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 mt-2 rounded-md text-white font-semibold transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Se înregistrează..." : "Înregistrează-te"}
        </button>

        {/* Social Login */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            className="w-full py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle size={20} />
            Înregistrează-te cu Google
          </button>
          <button
            type="button"
            className="w-full py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-md bg-blue-800 text-white hover:bg-blue-900 dark:border-gray-600 transition"
          >
            <FaFacebook size={20} />
            Înregistrează-te cu Facebook
          </button>
        </div>
      </form>
    </div>
  );
}
