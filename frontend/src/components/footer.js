// src/components/footer.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const LOGO_SRC = "/android-chrome-192x192.png"; // folosește icon-ul deja existent

  return (
    <footer
      className={`mt-12 transition-colors duration-300 ${
        darkMode ? "bg-indigo-800 text-gray-200" : "bg-indigo-200 text-gray-900"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Brand + copyright */}
          <div className="min-w-[220px]">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_SRC}
                alt="VelvetTales"
                className="h-7 w-7 rounded-full object-contain"
                loading="lazy"
              />
              <span className="font-extrabold tracking-tight text-base">
                VelvetTales
              </span>
            </div>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              &copy; {new Date().getFullYear()} {t("footerText")}
            </p>

            <p
              className={`mt-2 text-xs ${
                darkMode ? "text-gray-300/90" : "text-gray-700/90"
              }`}
            >
              {t(
                "footerDisclaimer",
                "Conținut 18+. Toate poveștile sunt ficțiune."
              )}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {t("footerLinksTitle", "Linkuri")}
              </p>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link
                  to="/allstories"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerAllStories", "Toate poveștile")}
                </Link>
                <Link
                  to="/subscribe"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerPlans", "Planuri")}
                </Link>
                <Link
                  to="/contact"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerContact", "Contact")}
                </Link>
              </div>
            </div>

            <div>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {t("footerLegalTitle", "Legal")}
              </p>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link
                  to="/terms"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerTerms", "Termeni")}
                </Link>
                <Link
                  to="/privacy"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerPrivacy", "Confidențialitate")}
                </Link>
                <Link
                  to="/cookies"
                  className="hover:underline underline-offset-4"
                >
                  {t("footerCookies", "Cookies")}
                </Link>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <p
              className={`text-xs font-bold uppercase tracking-wider ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {t("footerFollow", "Urmărește-ne")}
            </p>

            <div className="mt-3 flex md:justify-end space-x-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03C18.34 21.25 22 17.1 22 12.07z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </a>

              {/* X (Twitter) - SVG (nu depinde de fontawesome) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className={`transition ${
                  darkMode ? "hover:text-white" : "hover:text-gray-900"
                }`}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.6l-5.2-6.6L5.7 22H2.6l7.3-8.4L.9 2h6.7l4.7 6 6.6-6zM17.7 19.8h1.8L6.2 4.1H4.3l13.4 15.7z" />
                </svg>
              </a>
            </div>

            {/* Contact quick link (optional) */}
            <div className="mt-4 text-sm">
              <Link
                to="/contact"
                className="hover:underline underline-offset-4"
              >
                {t("footerContactLink", "Contactează-ne")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className={`mt-8 pt-4 border-t text-xs flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between ${
            darkMode
              ? "border-white/10 text-gray-300"
              : "border-indigo-300 text-gray-700"
          }`}
        >
          <span>{t("footerRights", "Toate drepturile rezervate.")}</span>
          <span>
            {t("footerMadeForReaders", "Creat pentru citit pe bune.")}
          </span>
        </div>
      </div>
    </footer>
  );
}
