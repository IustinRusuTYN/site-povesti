// src/pages/subscribe.js
import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

// --- Components ---
const BillingToggle = ({ billing, setBilling, darkMode }) => (
  <div
    className={`inline-flex items-center rounded-full mt-6 p-1 ${
      darkMode ? "bg-gray-700" : "bg-gray-200"
    }`}
  >
    {["monthly", "yearly"].map((type) => (
      <button
        key={type}
        onClick={() => setBilling(type)}
        className={`px-4 py-2 rounded-full transition ${
          billing === type
            ? darkMode
              ? "bg-gray-900 text-white shadow"
              : "bg-white text-gray-900 shadow"
            : "text-gray-400 dark:text-gray-300"
        }`}
      >
        {type === "monthly" ? "Lunar" : "Anual (reducere)"}
      </button>
    ))}
  </div>
);

const PriceDisplay = ({ plan, billing }) => {
  if (billing === "monthly") {
    return (
      <span className="text-3xl font-extrabold">
        ${plan.monthly.toFixed(2)}/mo
      </span>
    );
  }

  const yearly = plan.yearly;
  const monthlyEq = (yearly / 12).toFixed(2);
  const was = `$${(plan.monthly * 12).toFixed(2)}`;
  const save = Math.round(
    ((plan.monthly * 12 - yearly) / (plan.monthly * 12)) * 100
  );

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-extrabold">${yearly.toFixed(2)}/yr</span>
      <span className="text-sm text-gray-400 dark:text-gray-500">
        ≈ ${monthlyEq}/mo
      </span>
      <span className="text-xs mt-1 text-green-600 dark:text-green-400 font-semibold">
        Economisești {save}%
      </span>
      <span className="text-xs line-through text-gray-400 mt-1">{was}</span>
    </div>
  );
};

const PlanCard = ({ plan, billing, darkMode, onSubscribe }) => (
  <article
    className={`relative p-8 rounded-2xl shadow-lg border transition transform hover:-translate-y-2 ${
      darkMode
        ? plan.recommended
          ? "bg-gradient-to-br from-indigo-700 to-indigo-600 text-white border-indigo-500"
          : "bg-gray-800 text-gray-100 border-gray-700"
        : plan.recommended
        ? "bg-white border-indigo-400 ring-1 ring-indigo-100"
        : "bg-white border-gray-200"
    }`}
  >
    {plan.recommended && (
      <div className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow">
        Recomandat
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <p className="mb-6 text-sm text-gray-400 dark:text-gray-200">
      {plan.description}
    </p>
    <div className="mb-6">
      <PriceDisplay plan={plan} billing={billing} />
    </div>
    <ul className="mb-6 space-y-2 text-left">
      {plan.highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 text-green-600 dark:text-green-400">✔</span>
          <span className="text-sm text-gray-400 dark:text-gray-200">{h}</span>
        </li>
      ))}
    </ul>
    <Button
      variant={plan.recommended ? "secondary" : "primary"}
      onClick={() => onSubscribe(plan.id)}
      className={`w-full py-3 font-semibold ${
        plan.recommended ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""
      }`}
    >
      {plan.recommended ? "Go Premium" : "Alege Basic"}
    </Button>
    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
      Poți anula oricând • Plăți securizate • Refund 30 zile
    </p>
  </article>
);

const Testimonials = ({ testimonials, darkMode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-center">Ce spun cititoarele</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.id}
          className={`p-6 rounded-xl shadow-md border ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-200 text-gray-900"
          }`}
        >
          <blockquote className="text-sm mb-4">“{t.text}”</blockquote>
          <figcaption className="text-xs font-semibold">{t.name}</figcaption>
          <div className="text-xs text-gray-500">{t.role}</div>
        </figure>
      ))}
    </div>
  </section>
);

const TrustSection = ({ darkMode }) => (
  <section
    className={`p-6 rounded-xl ${
      darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
    }`}
  >
    <div className="grid gap-6 md:grid-cols-3">
      <div>
        <h4 className="font-semibold mb-2">Plăți sigure</h4>
        <p className="text-sm">
          Procesăm plățile prin Stripe. Datele cardului nu sunt stocate
          niciodată pe serverele noastre.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Anulezi oricând</h4>
        <p className="text-sm">
          Oprești reînnoirea din profil, fără taxe ascunse.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Suport și refund</h4>
        <p className="text-sm">
          Suport prioritar pentru Premium și refund în 30 de zile.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Page ---
export default function Subscribe() {
  const { darkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      monthly: 4.99,
      yearly: 49.99,
      highlights: [
        "Access la majoritatea poveștilor premium",
        "Lectură fără reclame (basic)",
        "Acces la comunitate și comentarii",
      ],
      recommended: false,
      description:
        "Ideal pentru cititorii ocazionali care vor puțin conținut premium.",
    },
    {
      id: "premium",
      name: "Premium",
      monthly: 9.99,
      yearly: 99.99,
      highlights: [
        "Acces complet la toate poveștile premium + capitole bonus",
        "Acces anticipat la noile lansări",
        "Suport prioritar și surprize exclusive",
      ],
      recommended: true,
      description:
        "Pentru cititorii care doresc experiența completă și bonusuri speciale.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Elena M.",
      text: "Am trecut la Premium și capitolele extra sunt extraordinare! Merită fiecare leu.",
      role: "Cititoare, București",
    },
    {
      id: 2,
      name: "Ioana P.",
      text: "Oferta anuală m-a convins. Economisesc bani și primesc conținut de calitate.",
      role: "Subscriber",
    },
    {
      id: 3,
      name: "Maria T.",
      text: "Lectura fără reclame și bonusurile exclusive fac experiența mult mai plăcută.",
      role: "Cititoare fidelă",
    },
  ];

  const handleSubscribe = (planId) => {
    if (!user) return navigate("/signin");
    alert(
      `Subscribed to ${planId} (${billing}) — flow demo. Backend integration required.`
    );
  };

  return (
    <PageLayout>
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Alege planul care ți se potrivește
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            Abonează-te și deblochează povești exclusive, capitole bonus și o
            experiență fără reclame. Alege lunar sau anual și bucură-te de
            reducere.
          </p>
          <BillingToggle
            billing={billing}
            setBilling={setBilling}
            darkMode={darkMode}
          />
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {plans.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              billing={billing}
              darkMode={darkMode}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>

        <Testimonials testimonials={testimonials} darkMode={darkMode} />
        <TrustSection darkMode={darkMode} />
      </main>
    </PageLayout>
  );
}
