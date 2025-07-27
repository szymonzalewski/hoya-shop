"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function ItemCard({
  className,
  name,
  desc,
  img,
  prize,
  currency,
  basket,
}) {
  const { addToCart } = useCart();
  const handleAdd = () => {
    addToCart({ name, desc, img, prize, currency });
  };
  return (
    <div className={className}>
      <h3>{name}</h3>
      <Image src={img} alt={name} />
      <p>{desc}</p>
      <span>
        {prize} {currency}
      </span>
      <button onClick={handleAdd}>{basket}</button>
    </div>
  );
}
