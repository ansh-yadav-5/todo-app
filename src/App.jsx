import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  

  const [todoItmes, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItmes, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
      const newTodoItems = todoItmes.filter((item) => item.name !== todoItemName);
      setTodoItems(newTodoItems);

   
  }

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItems} />
      {todoItmes.length === 0 && <WelcomeMessage todoItems={todoItmes}></WelcomeMessage>}
      <TodoItems todoItems={todoItmes} onDeleteClick={handleDeleteItem}></TodoItems>
    </div>
  );
}

export default App;
