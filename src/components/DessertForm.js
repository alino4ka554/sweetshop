import React, { useState } from "react";
import "../App.css";

function DessertForm({ onAddDessert }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Введите название";
    if (!description.trim()) newErrors.description = "Введите описание";
    if (!price || isNaN(price) || price <= 0) newErrors.price = "Цена должна быть положительным числом";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAddDessert({
      id: Date.now(),
      title,
      description,
      price: parseFloat(price),
    });
    setTitle("");
    setDescription("");
    setPrice("");
    setErrors({});
  };

  return (
    <form className="dessert-form" onSubmit={handleSubmit}>
      <h3>Добавить десерт</h3>

      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={errors.title ? "error" : ""}
      />
      {errors.title && <div className="error-text">{errors.title}</div>}

      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={errors.description ? "error" : ""}
      />
      {errors.description && <div className="error-text">{errors.description}</div>}

      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={errors.price ? "error" : ""}
      />
      {errors.price && <div className="error-text">{errors.price}</div>}

      <button type="submit">Добавить</button>
    </form>
  );
}

export default DessertForm;
