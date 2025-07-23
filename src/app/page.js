import Main from "./components/Main";
import ItemCard from "./components/ItemCard";
import "../styles/ItemCard.css";

const plants = [
  { name: "Hoja carnosa", desc: "Łatwa w pielęgnacji" },
  { name: "Hoja krimson queen", desc: "Pstre liście, lubi światło" },
];

export default function HomePage() {
  return (
    <Main>
      <h1>To nasze wspaniałe hoje</h1>
      {plants.map((plant, index) => (
        <div className="plant-list" key={index}>
          <ItemCard className="card" name={plant.name} desc={plant.desc} />
        </div>
      ))}
    </Main>
  );
}
