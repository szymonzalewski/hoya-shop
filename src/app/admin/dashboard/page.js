"use client";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Main from "../../components/Main";
import ItemCard from "../../../app/components/ItemCard";

import { usePlants } from "../../../context/PlantContext"; // <- dodaj to

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [prize, setPrize] = useState("");
  const [currency, setCurrency] = useState("PLN");

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push("/");
    }
  }, [user, router]);

  const { addPlant, plants } = usePlants();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant({
      name,
      desc,
      img,
      prize,
      currency,
      basket: "Dodaj do koszyka",
    });
  };

  return (
    <Main>
      <h1>Panel administratora</h1>
      <p>Witaj, {user?.email}</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          marginTop: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Nazwa rośliny"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Opis"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ścieżka do zdjęcia (np. /images/hojas/nowa.png)"
          value={img}
          required
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cena"
          value={prize}
          required
          onChange={(e) => setPrize(e.target.value)}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
        </select>

        <button type="submit">Dodaj roślinę</button>
      </form>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {plants.map((plant, index) => (
          <ItemCard
            key={index}
            name={plant.name}
            desc={plant.desc}
            img={plant.img}
            prize={plant.prize}
            currency={plant.currency}
            basket={plant.basket}
            className="card" // lub własna klasa CSS
          />
        ))}
      </div>
    </Main>
  );
}
