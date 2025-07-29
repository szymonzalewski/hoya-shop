"use client";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Main from "../../components/Main";
import ItemCard from "../../../app/components/ItemCard";

import { usePlants } from "../../../context/PlantContext";

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [editingIndex, setEditingIndex] = useState(null);

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

  const { addPlant, plants, removePlant, editPlant } = usePlants();

  const startEditing = (index) => {
    const plant = plants[index];
    setName(plant.name);
    setDesc(plant.desc);
    setImg(plant.img);
    setPrize(plant.prize);
    setCurrency(plant.currency);
    setEditingIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name,
      desc,
      img,
      prize,
      currency,
      basket: "Dodaj do koszyka",
    };

    if (editingIndex !== null) {
      editPlant(editingIndex, newPlant);
      setEditingIndex(null);
    } else {
      addPlant(newPlant);
    }

    setName("");
    setDesc("");
    setImg("");
    setPrize("");
    setCurrency("PLN");
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
          <div key={index} style={{ position: "relative" }}>
            <ItemCard
              name={plant.name}
              desc={plant.desc}
              img={plant.img}
              prize={plant.prize}
              currency={plant.currency}
              basket={plant.basket}
              className="card"
            />
            <button
              onClick={() => {
                if (confirm(`Czy napewno chcesz usunąć ${plant.name} hoję`))
                  removePlant(index);
              }}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Usuń
            </button>
            <button onClick={() => startEditing(index)}>Edytuj</button>
          </div>
        ))}
      </div>
    </Main>
  );
}
