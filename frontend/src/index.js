import React from "react";
import ReactDOM from "react-dom/client"; // Corect, folosește ReactDOM.createRoot
import { BrowserRouter } from "react-router-dom"; // ✅ adăugat
import "./index.css"; // Fișierele de stil
import "./i18n";
import App from "./App"; // Importă corect componenta App
import reportWebVitals from "./reportWebVitals"; // Performanța aplicației
import "./styles/tailwind.css"; // Stilurile Tailwind CSS
import { ThemeProvider } from "./context/themecontext";
import { AuthProvider } from "./context/authcontext";

// Inițializează aplicația și o montează pe elementul cu id-ul "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
