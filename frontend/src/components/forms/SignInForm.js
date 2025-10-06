import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import InputField from "./InputField";

export default function SignInForm({ onClose, emailRef }) {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [useSecurity, setUseSecurity] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => generateCaptcha(), []);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (useSecurity && !securityAnswer)) {
      setError("Completează toate câmpurile!");
      return;
    }

    if (useSecurity && parseInt(securityAnswer) !== num1 + num2) {
      setError("Răspunsul la întrebarea de securitate este greșit!");
      generateCaptcha();
      return;
    }

    try {
      await login({ email, password, rememberMe });
      onClose();
    } catch (err) {
      setError(err.message || "Datele sunt invalide!");
      generateCaptcha();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-xl shadow-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <button
        onClick={onClose}
        aria-label="Închide formularul"
        className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-xl font-bold transition"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-4 text-center">Bine ai venit!</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
        Autentifică-te pentru a continua
      </p>

      {error && (
        <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="email"
          placeholder="Email"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          datalistId="email-suggestions"
          options={[
            "andrei@example.com",
            "maria@example.com",
            "ioana@example.com",
            "alex@example.com",
            "cristina@example.com",
          ]}
          required
        />

        <InputField
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {useSecurity && (
          <div className="flex items-center space-x-3">
            <span className="font-semibold">
              {num1} + {num2} = ?
            </span>
            <InputField
              type="number"
              placeholder="Răspuns"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              className="w-20"
              required
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="accent-blue-500"
            />
            <span>Păstrează-mă autentificat</span>
          </label>
          <button
            type="button"
            className="text-sm text-blue-500 hover:underline"
          >
            Ai uitat parola?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          {loading ? "Se conectează..." : "Conectează-te"}
        </button>
      </form>

      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        <span className="mx-3 text-gray-400">sau</span>
        <hr className="flex-1 border-gray-300 dark:border-gray-600" />
      </div>

      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-center gap-2 py-3 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <FcGoogle size={20} /> Continuă cu Google
        </button>
        <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-blue-700 bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition">
          <FaFacebook size={18} /> Continuă cu Facebook
        </button>
      </div>
    </div>
  );
}
