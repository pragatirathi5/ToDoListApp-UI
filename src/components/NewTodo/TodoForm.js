import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [todoDate, setTodoDate] = useState("");

    const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setTodoDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      title: title,
      priority: priority,
      date: todoDate,
    };
    props.onSaveTodoData(userData);
    console.log("FORM:::", userData);
    setTitle("");
    setPriority("High");
    setTodoDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo-controls">
        <div className="new-todo-control">
          <label>Title</label>

          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-todo-control">
          <label>Priority</label>
          <select
            name="selectList"
            id="selectList"
            onChange={priorityChangeHandler}
            value={priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="new-todo-control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={todoDate} />
        </div>
      </div>
      <div className="new-todo-actions">
        <button type="submit"> Add Todo </button>
      </div>
    </form>
  );
};

export default TodoForm;
