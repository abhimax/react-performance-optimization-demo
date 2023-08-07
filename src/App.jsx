import { useMemo } from "react";
import "./App.css";
import { ItemList } from "./modules/memo/ItemList";
import { items } from "./modules/memo/data";

function App() {
  const memorizedItems = useMemo(() => items, [items]);
  return <ItemList items={memorizedItems} />;
}

export default App;
