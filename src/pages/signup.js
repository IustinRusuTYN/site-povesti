import React from "react";
import AuthHeader from "../components/authheader";
import Footer from "../components/footer"; // dacă ai deja footer
import SignupForm from "../components/forms/SignupForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthHeader />

      <main className="flex-grow flex items-center justify-center px-4">
        <SignupForm />
      </main>

      <Footer />
    </div>
  );
}
