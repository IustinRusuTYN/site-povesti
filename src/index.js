import React from 'react';
import ReactDOM from 'react-dom/client';  // Corect, folosește ReactDOM.createRoot
import './index.css';  // Fișierele de stil
import App from './App';  // Importă corect componenta App
import reportWebVitals from './reportWebVitals';  // Performanța aplicației
import './styles/tailwind.css';  // Stilurile Tailwind CSS

// Inițializează aplicația și o montează pe elementul cu id-ul "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Măsurarea performanței aplicației (opțional)
reportWebVitals();
