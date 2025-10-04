import React from "react";
import AuthHeader from "../components/authheader";
import Footer from "../components/footer"; // dacă ai deja footer
import SignInForm from "../components/forms/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthHeader />

      <main className="flex-grow flex items-center justify-center px-4">
        <SignInForm />
      </main>

      <Footer />
    </div>
  );
}
