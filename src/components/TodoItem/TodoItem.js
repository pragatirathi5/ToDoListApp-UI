import { useState } from "react";
import "./TodoItem.css";
import TodoDate from "../TodoDate/TodoDate";
import Card from "../UI/Card/Card";
function TodoItem(props) {
  const [mytitle, setTitle] = useState(props.title);


  const priority = props.priority;

  return (
    <Card className="todo-item">
      {/* Date was here */}
      <TodoDate newDate={props.date} />
      <div className="todo-description">
        <h2>{mytitle}</h2>
        <div className="todo-priority">{priority}</div>
      </div>
    </Card>
  );
}

export default TodoItem;
