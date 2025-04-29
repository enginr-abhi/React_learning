import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    { name: "Buy Milk", dueDate: "25/04/2025" },
    { name: "finish react", dueDate: "25/04/2025" },
    { name: "Finsh", dueDate: "25/04/2025" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName,itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  return (
    <center>
      <TodoName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={initialTodoItems} />
    </center>
  );
}

export default App;
