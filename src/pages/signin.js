// src/pages/signin.js
import React from "react";
import SignInForm from "../components/signinform";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SignInForm />
    </div>
  );
}
