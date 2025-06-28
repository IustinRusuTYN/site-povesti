/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,css,js,jsx,ts,tsx,svg}", // Asigură-te că aceste căi includ toate fișierele tale sursă
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
