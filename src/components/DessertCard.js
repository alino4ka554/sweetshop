function DessertCard({ dessert }) {
  return (
    <div className="card">
      <h3>{dessert.title}</h3>
      <p>{dessert.description}</p>
      <p>{dessert.price} ₽</p>
      <button>Подробнее</button>
    </div>
  );
}
export default DessertCard;
