// src/components/header/modalcontainer.js
import React from "react";
import SignInForm from "../forms/SignInForm";
import SignupForm from "../forms/SignupForm";

export default function ModalContainer({
  showModal,
  setShowModal,
  darkMode,
  emailRef,
}) {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={() => setShowModal(null)}
    >
      <div
        className={`relative w-full max-w-md p-6 rounded-lg shadow-lg transition-colors ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {showModal === "signin" && (
          <SignInForm onClose={() => setShowModal(null)} emailRef={emailRef} />
        )}
        {showModal === "signup" && (
          <SignupForm onClose={() => setShowModal(null)} />
        )}
      </div>
    </div>
  );
}
