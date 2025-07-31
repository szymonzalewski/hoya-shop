"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function ItemCard({
  name,
  desc,
  img,
  prize,
  currency,
  basket,
  className,
}) {
  return (
    <div className={className}>
      <h3>{name}</h3>
      <div className="image-wrapper">
        <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <p>{desc}</p>
      <span>
        {prize} {currency}
      </span>
      <button>{basket}</button>
    </div>
  );
}
