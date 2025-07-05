import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllStories from "./pages/allstories";
import Story from "./pages/story";
import { ThemeProvider } from "./context/ThemeContext";

console.log("Home =", Home);
console.log("AllStories =", AllStories);
console.log("Story =", Story);

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/allstories" element={<AllStories />} />
      </Routes>
    </ThemeProvider>
  );
}
