import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// library import
import { PlusIcon } from "@heroicons/react/24/solid";

uuidv4();
const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: uuidv4(),
      timeCreated: Date.now(),
    });
    setTask("");
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => {
            setTask(e.target.value);
          }}
          required
          autoFocus
          maxLength={60}
          placeholder="Go Shopping..."
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
