"use client";
import Main from "../components/Main";
import { useCart } from "../../context/CartContext";

export default function Basket() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.prize, 0);

  const handleConfirm = () => {
    if (cart.length === 0) {
      alert("Koszyk jest pusty, nie mona złożyć zamówienia");
    } else {
      alert("Zamówienie złożone");
      clearCart();
    }
  };

  if (cart.length > 1) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmioty</p>
        <p>Wartość koszyka: {total} PLN</p>
        <button onClick={handleConfirm}>Złóż zamówienie</button>
      </Main>
    );
  } else if (cart.length === 0) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmiotów</p>
        <p>Wartość koszyka: {total} PLN</p>
        <button onClick={handleConfirm}>Złóż zamówienie</button>
      </Main>
    );
  } else {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmioty</p>
        <p>Wartość koszyka: {total} PLN</p>
        <button onClick={handleConfirm}>Złóż zamówienie</button>
      </Main>
    );
  }
}
