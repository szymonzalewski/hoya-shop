"use client";
import { useCart } from "../../context/CartContext";

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
      <img src={img} alt={name} className="card-image" />
      <p>{desc}</p>
      <span>
        {prize} {currency}
      </span>
      <button onClick={handleAdd}>{basket}</button>
    </div>
  );
}
