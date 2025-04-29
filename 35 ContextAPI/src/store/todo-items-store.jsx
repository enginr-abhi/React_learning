import { createContext } from "react";

//here TodoItemsContext is object
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
