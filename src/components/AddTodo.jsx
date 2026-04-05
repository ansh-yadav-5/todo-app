import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter TODO Here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={todoDueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleAddButtonClick} 
        >
          <MdOutlineAddBox />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
