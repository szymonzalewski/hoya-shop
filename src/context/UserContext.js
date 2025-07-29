"use client";
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Błędne dane logowania");
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Dodaj admina, jeśli go nie ma
    const hasAdmin = storedUsers.some((u) => u.email === "admin@ms.pl");
    if (!hasAdmin) {
      storedUsers.push({
        email: "admin@ms.pl",
        password: "admin123",
        isAdmin: true,
      });
      localStorage.setItem("users", JSON.stringify(storedUsers));
    }

    setUsers(storedUsers);
  }, []);

  const register = (email, password) => {
    const exists = users.some((u) => u.email === email);
    if (exists) {
      alert("Użytkownik już istnieje");
      return;
    }
    const newUser = { email, password, isAdmin: false };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
