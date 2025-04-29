import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
const AddTodo = ({onNewItem})=>{
const [todoName,setTodoName]=useState('');
const [todoDate,setTodoDate]=useState('');

const handleNameChange = (event)=>{
  setTodoName(event.target.value);
}
const handleDateChange = (event)=>{
  setTodoDate(event.target.value);
}
const handleAddBtnClicked = ()=>{
  onNewItem(todoName,todoDate)
  setTodoName('');
  setTodoDate('');
}
 return  <div className="container">
 <div className="row myrow">
  <div className="col-6"><input type="text" name="" id="" placeholder="Enter Todo here" onChange={handleNameChange} value={todoName}/></div>
  <div className="col-4"><input type="date" name="" id="" onChange={handleDateChange} value={todoDate} /></div>
  <div className="col-2"><button type="button" className="btn btn-success mybtn" onClick={handleAddBtnClicked}><IoIosAddCircle /></button></div>
</div>
</div>
}
export default AddTodo