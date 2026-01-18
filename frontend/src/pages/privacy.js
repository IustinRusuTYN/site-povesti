import React, { useContext } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";

export default function Privacy() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const sections = t("privacy.sections", { returnObjects: true });

  return (
    <PageLayout>
      <section
        className={`min-h-screen py-10 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className={`rounded-2xl p-6 sm:p-8 border ${
              darkMode
                ? "bg-gray-800/60 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`p-2 rounded-xl ${
                  darkMode ? "bg-indigo-600/20" : "bg-indigo-100"
                }`}
              >
                <Shield
                  className={darkMode ? "text-indigo-300" : "text-indigo-700"}
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold">
                {t("privacy.title")}
              </h1>
            </div>

            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {t("privacy.subtitle")}
            </p>

            <div className="mt-8 space-y-6">
              {Array.isArray(sections) &&
                sections.map((s, idx) => (
                  <div key={idx}>
                    <h2 className="text-lg font-bold mb-2">{s.title}</h2>
                    <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      {s.body}
                    </p>
                    {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                      <ul
                        className={`mt-3 list-disc pl-5 text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {s.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>

            <p
              className={`mt-10 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {t("legal.templateNote")}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
