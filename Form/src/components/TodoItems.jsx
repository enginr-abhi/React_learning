import TodoItem from "./TodoItem";
import Styles from './TodoItems.module.css';
const TodoItems = ({ todoItems ,onDeleteClick})=>{
  return <div className={Styles.itemsContainer}>
       {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate} key={item.name} onDeleteClick ={onDeleteClick}/>)}
      </div>
}
export default TodoItems;