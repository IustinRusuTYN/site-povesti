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
import Profile from "./pages/profile"; // 👈 import adăugat
import { ThemeProvider } from "./context/themecontext";
import { SearchProvider } from "./context/searchcontext";
import { AuthProvider } from "./context/authcontext"; // 👈 corectat casing
import { UserProvider } from "./context/usercontext";
import PrivateRoute from "./components/privateroute"; // 👈 importat corect

export default function App() {
  return (
    <UserProvider>
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Rute protejate */}
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
    </UserProvider>
  );
}
