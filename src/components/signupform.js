// src/components/signupform.js
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authcontext";

export default function SignupForm({ onSubmit }) {
  const { signup, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [useSecurity, setUseSecurity] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => generateQuestion(), []);

  const generateQuestion = () => {
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

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      (useSecurity && !securityAnswer)
    ) {
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
    if (useSecurity && parseInt(securityAnswer) !== num1 + num2) {
      setError("Răspunsul la întrebarea de securitate este greșit!");
      generateQuestion();
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
      generateQuestion();
      if (onSubmit) onSubmit({ name, email }); // trimite către Header pentru închiderea modalului
    } catch (err) {
      setError(err.message || "Eroare la înregistrare!");
      generateQuestion();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Creează cont</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nume"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
          required
        />
        <input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
          required
        />
        <input
          type="password"
          placeholder="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
          required
        />

        {useSecurity && (
          <div className="flex items-center space-x-3">
            <span className="font-semibold">
              {num1} + {num2} = ?
            </span>
            <input
              type="number"
              placeholder="Răspuns"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              className="w-20 px-3 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

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
          className={`w-full py-2 mt-2 rounded-md text-white transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Se înregistrează..." : "Înregistrează-te"}
        </button>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-md text-white transition"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full py-2 bg-blue-800 hover:bg-blue-900 rounded-md text-white transition"
          >
            Facebook
          </button>
        </div>
      </form>

      <div className="mt-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
        <input
          type="checkbox"
          checked={useSecurity}
          onChange={() => setUseSecurity(!useSecurity)}
          className="mr-2"
        />
        Folosește întrebarea de securitate (captcha)
      </div>
    </div>
  );
}
