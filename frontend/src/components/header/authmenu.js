import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import { useTranslation } from "react-i18next";

export default function AuthMenu({
  isMobile = false,
  showModal,
  setShowModal,
}) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // UTILIZATOR AUTENTIFICAT
  if (user) {
    // Mobil: elemente pe coloana
    if (isMobile) {
      return (
        <div className="flex flex-col gap-2">
          <Link
            to="/profile"
            className="font-semibold text-blue-700 hover:underline"
          >
            {t("welcome")}, {user.name}
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="w-full px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            {t("logout") || "Logout"}
          </button>
        </div>
      );
    }

    // Desktop: totul pe un singur rând
    return (
      <div className="flex items-center space-x-3 whitespace-nowrap">
        <Link
          to="/profile"
          className="font-semibold text-white hover:underline"
        >
          {t("welcome")}, {user.name}
        </Link>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
        >
          {t("logout") || "Logout"}
        </button>
      </div>
    );
  }

  // UTILIZATOR NEAUTENTIFICAT
  if (isMobile) {
    // Mobil: butoane pe 2 rânduri (full width)
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setShowModal("signin")}
          className="w-full px-3 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
        >
          {t("login")}
        </button>
        <button
          onClick={() => setShowModal("signup")}
          className="w-full px-3 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          {t("signup")}
        </button>
      </div>
    );
  }

  // Desktop: butoane pe un singur rând, lângă nav
  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <button
        onClick={() => setShowModal("signin")}
        className="font-semibold text-white/90 hover:text-white"
      >
        {t("login")}
      </button>
      <button
        onClick={() => setShowModal("signup")}
        className="px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        {t("signup")}
      </button>
    </div>
  );
}
