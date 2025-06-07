import React, { useState } from "react";
import dessertsData from "../data/desserts";
import DessertCard from "./DessertCard";
import DessertForm from "./DessertForm";

function DessertList() {
  const [desserts, setDesserts] = useState(dessertsData);
  const [sortOrder, setSortOrder] = useState("default");

  const handleAddDessert = (newDessert) => {
    setDesserts([newDessert, ...desserts]);
  };

  const sortedDesserts = [...desserts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="dessert-container">
      <div className="form-column">
        <DessertForm onAddDessert={handleAddDessert} />
      </div>

      <div className="list-column">
        <div style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: "0.4rem", borderRadius: "6px" }}
          >
            <option value="default">Без сортировки</option>
            <option value="asc">По цене ↑</option>
            <option value="desc">По цене ↓</option>
          </select>
        </div>

        <div className="dessert-grid">
          {sortedDesserts.map((d) => (
            <DessertCard key={d.id} dessert={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DessertList;
