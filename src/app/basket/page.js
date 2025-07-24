"use client";
import Main from "../components/Main";
import { useCart } from "../../context/CartContext";

export default function Basket() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.prize, 0);

  if (cart.length > 1) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>
          Masz w koszyku: {cart.length} {total} przedmioty
        </p>
      </Main>
    );
  } else if (cart.length === 0) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>
          Masz w koszyku: {cart.length} {total} przedmiotów
        </p>
      </Main>
    );
  } else {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>
          Masz w koszyku: {cart.length} {total} przedmioty
        </p>
      </Main>
    );
  }
}
