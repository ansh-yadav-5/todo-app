import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialtodoItmes = [
    {
      name: "Buy milk",
      dueDate: "14/2/2026",
    },
    {
      name: "Go to college",
      dueDate: "14/2/2026",
    },
    {
      name: "Go to school",
      dueDate: "14/2/2026",
    },
  ];

  const [todoItmes, setTodoItems] = useState(initialtodoItmes);

  const handleNewItems = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItmes, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItems} />
      <TodoItems todoItems={todoItmes}></TodoItems>
    </div>
  );
}

export default App;
