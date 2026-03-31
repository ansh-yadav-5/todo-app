import style from './TodoItems.module.css';
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems , onDeleteClick}) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;