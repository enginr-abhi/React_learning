import { useState } from "react";
import Styles from "./AddTodo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event)=>{
    event.preventDefault();    
    onNewItem(todoName,dueDate);
    setTodoName('');
    setDueDate('');

  }
  return (
    <div className="container">
      <form  className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={handleDateChange}
            value={dueDate}
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
