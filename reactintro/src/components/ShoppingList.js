import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  // The reduce function is applied to plantList. It takes a callback function and an initial value ([] in this case).
  const categories = plantList.reduce(
    // The reduce function is applied to plantList. It takes a callback function and an initial value ([] in this case).
    (acc, plant) =>
      // acc.includes(plant.category) checks if the current plant's category is already present in the accumulator array.
      // If it is not present (!acc.includes(plant.category)), it adds the category to the accumulator using acc.concat(plant.category).
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li className="lmj-plant-item" key={`${plant.id}-${plant.name}`}>
            {plant.name}
            {plant.isBestSale ? <span>🔥</span> : null}
            {plant.isSpecialOffer ? (
              <div className="lmj-sales">Soldes</div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
