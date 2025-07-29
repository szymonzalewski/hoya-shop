"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/UserContext";
import Main from "../components/Main";

export default function RegisterPage() {
  const { register } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
    router.push("/"); // lub do /login
  };

  return (
    <Main>
      <h1>Rejestracja</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}
      >
        <input
          type="email"
          placeholder="Adres e-mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zarejestruj się</button>
      </form>
    </Main>
  );
}
