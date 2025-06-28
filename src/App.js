import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Story from "./pages/story";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </ThemeProvider>
  );
}
