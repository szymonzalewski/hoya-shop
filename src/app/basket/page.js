"use client";
import Main from "../components/Main";
import { useCart } from "../../context/CartContext";

export default function Basket() {
  const { cart } = useCart();

  if (cart.length > 1) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmioty</p>
      </Main>
    );
  } else if (cart.length === 0) {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmiotów</p>
      </Main>
    );
  } else {
    return (
      <Main>
        <h1>Twój koszyk</h1>
        <p>Masz w koszyku: {cart.length} przedmioty</p>
      </Main>
    );
  }
}
