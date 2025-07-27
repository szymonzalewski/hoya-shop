"use client";
import { createContext, useState, useContext } from "react";

const PlantContext = createContext();

export function PlantProvider({ children }) {
  const [plants, setPlants] = useState([
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

  const addPlant = (plant) => {
    setPlants((prev) => [...prev, plant]);
  };

  return (
    <PlantContext.Provider value={{ plants, addPlant }}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlants() {
  return useContext(PlantContext);
}
