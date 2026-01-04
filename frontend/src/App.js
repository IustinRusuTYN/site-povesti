// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllStories from "./pages/allstories";
import Story from "./pages/story";
import About from "./pages/about";
import Subscribe from "./pages/subscribe";
import Upcoming from "./pages/upcoming";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ScrollToTop from "./components/scrolltotop";
import Profile from "./pages/profile";
import { ThemeProvider } from "./context/themecontext";
import { SearchProvider } from "./context/searchcontext";
import { LangProvider } from "./context/langcontext";
import { AuthProvider } from "./context/authcontext";
import PrivateRoute from "./components/privateroute";

export default function App() {
  return (
    <LangProvider>
      {/* Eliminat UserProvider - AuthContext face totul */}
      <AuthProvider>
        <ThemeProvider>
          <SearchProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story/:id" element={<Story />} />
              <Route path="/allstories" element={<AllStories />} />
              <Route path="/about" element={<About />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Rută protejată - doar una */}
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </SearchProvider>
        </ThemeProvider>
      </AuthProvider>
    </LangProvider>
  );
}
