import { useMemo } from "react";
import "./App.css";
import { ItemList } from "./modules/memo1/ItemList";
import { items } from "./modules/memo1/data";
import ItemList2 from "./modules/memo2/ItemList2";

function App() {
  const memorizedItems = useMemo(() => items, [items]);
  return (
    <>
      <ItemList items={memorizedItems} />
      <ItemList2 />
    </>
  );
}

export default App;
