"use client";
import Main from "../components/Main";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function UserPage() {
  const { user, logout } = useUser();
  const router = useRouter();
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + Number(item.prize), 0);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  if (!user) return null;
  return (
    <Main>
      <h1>Twoje konto</h1>
      <p>E-mail: {user.email}</p>
      <p>Status: {user.isAdmin ? "Administrator" : "Użytkownik"}</p>
      <h2>Twój koszyk</h2>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} – {item.prize} {item.currency}
              </li>
            ))}
          </ul>
          <p>Razem: {total} PLN</p>
          <button onClick={clearCart}>Wyczyść koszyk</button>
        </>
      )}
      <button onClick={logout}>Wyloguj się</button>
    </Main>
  );
}
