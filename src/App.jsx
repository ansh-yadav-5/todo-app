import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css"; 

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todoContainer">
      <AppName />
      <AddTodo onNewItem={handleNewItems} />

      {todoItems.length === 0 && (
        <WelcomeMessage />
      )}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      />
    </div>
  );
}

export default App;