import {useRef} from "react";
import Styles from "./AddTodo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const handleAddButtonClicked = (event)=>{
    event.preventDefault();  
    const todoName = todoNameElement.current.value;
    todoNameElement.current.value='';
    const dueDate = dueDateElement.current.value;
    dueDateElement.current.value='';
    addNewItem(todoName,dueDate);
  }
  return (
    <div className="container">
      <form  className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
          ref={todoNameElement}
            type="text"
            name=""
            id=""
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
          ref={dueDateElement}
            type="date"
            name=""
            id=""
          />
        </div>
        <div className="col-2">
          <button
          type="submit"
            className={`btn btn-success kg-button ${Styles.addBtn}`}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
