"use client";
import Main from "./components/Main";
import ItemCard from "./components/ItemCard";
import "../styles/ItemCard.css";
import { usePlants } from "../context/PlantContext";

export default function HomePage() {
  const { plants } = usePlants();
  return (
    <Main>
      <h1>To nasze wspaniałe hoje</h1>
      <div className="plant-list">
        {plants.map((plant, index) => (
          <ItemCard {...plant} className="card" key={index} />
        ))}
      </div>
    </Main>
  );
}
