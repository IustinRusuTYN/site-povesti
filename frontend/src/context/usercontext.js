import React, { createContext, useState, useContext } from "react";

// Cream contextul
export const UserContext = createContext();

// Provider global
export const UserProvider = ({ children }) => {
  // Simulăm un utilizator logat (poți schimba "free" -> "basic" -> "premium")
  const [user, setUser] = useState({
    id: 1,
    name: "Test User",
    subscription: "free", // "free" | "basic" | "premium"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook pentru acces rapid
export const useUser = () => useContext(UserContext);
