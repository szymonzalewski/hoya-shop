import Main from "./components/Main";
import ItemCard from "./components/ItemCard";
import "../styles/ItemCard.css";

const plants = [
  {
    name: "Hoja carnosa",
    desc: "Łatwa w pielęgnacji",
    img: "/images/hoyas/carnosa.png",
    prize: 150,
    currency: "PLN",
    basket: "Dodaj do koszyka",
  },
  {
    name: "Hoja krimson queen",
    desc: "Pstre liście, lubi światło",
    img: "/images/hoyas/krimson.png",
    prize: 200,
    currency: "PLN",
    basket: "Dodaj do koszyka",
  },
];

export default function HomePage() {
  return (
    <Main>
      <h1>To nasze wspaniałe hoje</h1>
      {plants.map((plant, index) => (
        <div className="plant-list" key={index}>
          <ItemCard
            className="card"
            name={plant.name}
            img={plant.img}
            desc={plant.desc}
            prize={plant.prize}
            currency={plant.currency}
            basket={plant.basket}
          />
        </div>
      ))}
    </Main>
  );
}
