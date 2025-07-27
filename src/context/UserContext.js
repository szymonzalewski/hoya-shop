"use client";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@mojsklep.pl" && password === "admin123") {
      setUser({ email, isAdmin: true });
    } else if (email === "user@mojsklep.pl" && password === "user123") {
      setUser({ email, isAdmin: false });
    } else {
      alert("Błędne dane logowania");
    }
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
