// src/pages/signup.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import AuthHeader from "../components/authheader";
import Footer from "../components/footer";
import SignupForm from "../components/forms/SignupForm";

export default function SignUpPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <AuthHeader />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <SignupForm />
      </main>

      <Footer />
    </div>
  );
}
