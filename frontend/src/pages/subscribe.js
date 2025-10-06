import React, { useContext, useState } from "react";
import PageLayout from "../components/pagelayout";
import { ThemeContext } from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

import BillingToggle from "../components/subscribe/billingToggle";
import PlanCard from "../components/subscribe/planCard";
import Testimonials from "../components/subscribe/testimonials";
import TrustSection from "../components/subscribe/trustSection";

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

  const testimonialsData = [
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

        <Testimonials testimonials={testimonialsData} darkMode={darkMode} />
        <TrustSection darkMode={darkMode} />
      </main>
    </PageLayout>
  );
}
