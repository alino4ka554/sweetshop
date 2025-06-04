import desserts from "../data/desserts";
import DessertCard from "./DessertCard";

function DessertList() {
  return (
    <div className="dessert-grid">
      {desserts.map((d) => (
        <DessertCard key={d.id} dessert={d} />
      ))}
    </div>
  );
}
export default DessertList;
