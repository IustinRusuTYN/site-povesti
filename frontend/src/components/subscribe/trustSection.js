import React from "react";

export default function trustSection({ darkMode }) {
  return (
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
}
