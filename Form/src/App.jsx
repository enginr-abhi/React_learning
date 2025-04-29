import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

function App() {
 
 
  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem = (itemName,itemDueDate) => {
    console.log(`NewItem Added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate,
    }];
    setTodoItems(newTodoItems);
   }

   const handleDeleteItem = (itemName)=>{
    const newTodoItems = todoItems.filter(item => item.name!== itemName)
    setTodoItems(newTodoItems);
    
   }
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo onNewItem = {handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem}/>
    </center>
  );
}

export default App;
