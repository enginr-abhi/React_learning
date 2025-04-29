import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
return (
  <div className="items-container">
    {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate} key={item.name}/>)}
</div>
  );
};
export default TodoItems;
