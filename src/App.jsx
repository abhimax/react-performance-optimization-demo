import { useMemo } from "react";
import "./App.css";
import { ItemList } from "./modules/memo1/ItemList";
import { items } from "./modules/memo1/data";
import UserProfileList from "./modules/memo2/UserProfileList";
import { profilesData } from "./modules/memo2/data";

function App() {
  const memorizedItems = useMemo(() => items, [items]);
  return (
    <>
      <ItemList items={memorizedItems} />
      <UserProfileList profiles={profilesData} />
    </>
  );
}

export default App;
