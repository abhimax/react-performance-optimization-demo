import { calculateCost } from "./calculateCost";

export function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Cost: {calculateCost(item.quantity, item.price)}
        </li>
      ))}
    </ul>
  );
}
