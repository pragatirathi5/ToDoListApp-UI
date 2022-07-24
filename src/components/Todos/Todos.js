import "./Todos.css";
import TodoItem from "../TodoItem/TodoItem";
import Card from "../UI/Card/Card";
function Todos(props) {
  const todo = props.item;
  return (
    <Card className="todos">
      <TodoItem
        title={todo[0].title}
        priority={todo[0].priority}
        date={todo[0].date}
      />
      <TodoItem
        title={todo[1].title}
        priority={todo[1].priority}
        date={todo[1].date}
      />
      <TodoItem
        title={todo[2].title}
        priority={todo[2].priority}
        date={todo[2].date}
      />
      <TodoItem
        title={todo[3].title}
        priority={todo[3].priority}
        date={todo[3].date}
      />
    </Card>
  );
}
export default Todos;
