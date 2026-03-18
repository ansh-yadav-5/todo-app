import style from './TodoItems.module.css';
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;