import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={Styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          key={item.name}
        />
      ))}
    </div>
  );
};
export default TodoItems;
