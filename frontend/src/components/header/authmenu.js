// src/components/header/authmenu.js
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

  if (user) {
    return (
      <div className={isMobile ? "block" : "flex items-center space-x-3"}>
        <Link
          to="/profile"
          className="font-semibold hover:underline text-blue-700"
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

  return (
    <>
      <button
        onClick={() => setShowModal("signin")}
        className="font-semibold hover:underline"
      >
        {t("login")}
      </button>
      <button
        onClick={() => setShowModal("signup")}
        className="ml-2 px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        {t("signup")}
      </button>
    </>
  );
}
