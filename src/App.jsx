import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {
  const todoItmes = [
    {
      name: "Buy milk",
      dueDate: "14/2/2026"
    },
    {
      name: "Go to college",
      dueDate: "14/2/2026"
    },
     {
      name: "Go to school",
      dueDate: "14/2/2026"
    },
  ];





  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItmes}></TodoItems>
      
    </div>
  );
}

export default App;
