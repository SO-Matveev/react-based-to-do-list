import { useState } from "react";
import "./App.css";
import "./components/AddItemForm";
import AddItemForm from "./components/AddItemForm";

const defaultItems = [{ id: 0, title: "купить хлеб", completed: false }];

function App() {
  const [items, setItems] = useState(defaultItems);
  const handleSubmit = (title) => {
    const newItems = {
      id: items.length,
      title,
      completed: false,
    };

    setItems([...items, newItems]);
  };
  return (
    <div>
      <AddItemForm onSubmit={handleSubmit} />
      {items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
