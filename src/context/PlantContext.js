"use client";
import { createContext, useState, useContext, useEffect } from "react";

const PlantContext = createContext();

export function PlantProvider({ children }) {
  const [plants, setPlants] = useState([]);

  // 👉 Odczyt z localStorage przy pierwszym renderze
  useEffect(() => {
    const stored = localStorage.getItem("plants");
    if (stored) {
      setPlants(JSON.parse(stored));
    } else {
      // jeśli brak danych – ustaw domyślne
      setPlants([
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
      ]);
    }
  }, []);

  // 👉 Zapisuj do localStorage za każdym razem, gdy plants się zmienią
  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (plant) => {
    setPlants((prev) => [...prev, plant]);
  };

  const removePlant = (indexToRemove) => {
    setPlants((prevPlants) => prevPlants.filter((_, i) => i !== indexToRemove));
  };

  const editPlant = (indexToEdit, updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant, i) => (i === indexToEdit ? updatedPlant : plant))
    );
  };

  return (
    <PlantContext.Provider value={{ plants, addPlant, removePlant, editPlant }}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlants() {
  return useContext(PlantContext);
}
