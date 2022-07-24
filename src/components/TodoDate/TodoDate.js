import "./TodoDate.css";

function TodoDate(props) {
  const month = props.newDate.toLocaleString("en-US", { month: "long" });
  const day = props.newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.newDate.getFullYear();
  return (
    <div className="todo-date">
      <div className="todo-month">{month}</div>
      <div className="todo-year">{year}</div>
      <div className="todo-day">{day}</div>
    </div>
  );
}

export default TodoDate;
