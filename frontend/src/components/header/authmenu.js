// src/components/header/authmenu.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import { useTranslation } from "react-i18next";

export default function AuthMenu({
  isMobile = false,
  showModal,
  setShowModal,
}) {
  const { user, logout, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loggingOut, setLoggingOut] = useState(false);

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email ||
    "User";

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);
    try {
      const fn = logout || signOut;
      if (!fn) return;

      const res = await fn(); // { error } or null
      if (res?.error) {
        console.error("Logout error:", res.error);
        return;
      }

      navigate("/", { replace: true });
    } finally {
      setLoggingOut(false);
    }
  };

  // AUTHENTICATED
  if (user) {
    if (isMobile) {
      return (
        <div className="flex flex-col gap-2">
          <Link
            to="/profile"
            className="font-semibold text-blue-700 hover:underline"
          >
            {t("welcome")}, {displayName}
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className={`w-full px-3 py-1 rounded-md text-white transition-colors ${
              loggingOut
                ? "bg-red-600/70 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loggingOut
              ? t("loggingOut", "Logging out...")
              : t("logout") || "Logout"}
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-3 whitespace-nowrap">
        <Link
          to="/profile"
          className="font-semibold text-white hover:underline"
        >
          {t("welcome")}, {displayName}
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className={`px-3 py-1 rounded-md text-white transition-colors ${
            loggingOut
              ? "bg-red-600/70 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loggingOut
            ? t("loggingOut", "Logging out...")
            : t("logout") || "Logout"}
        </button>
      </div>
    );
  }

  // NOT AUTHENTICATED
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setShowModal("signin")}
          className="w-full px-3 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
        >
          {t("login")}
        </button>
        <button
          type="button"
          onClick={() => setShowModal("signup")}
          className="w-full px-3 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          {t("signup")}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <button
        type="button"
        onClick={() => setShowModal("signin")}
        className="font-semibold text-white/90 hover:text-white"
      >
        {t("login")}
      </button>
      <button
        type="button"
        onClick={() => setShowModal("signup")}
        className="px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        {t("signup")}
      </button>
    </div>
  );
}
