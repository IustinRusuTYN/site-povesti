import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllStories from "./pages/allstories";
import Story from "./pages/story";
import About from "./pages/about";
import Subscribe from "./pages/subscribe";
import Upcoming from "./pages/upcoming";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<Story />} />
      <Route path="/allstories" element={<AllStories />} />
      <Route path="/about" element={<About />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/upcoming" element={<Upcoming />} />
    </Routes>
  );
}
