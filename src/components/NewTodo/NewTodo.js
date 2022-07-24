import TodoForm from "./TodoForm";
import "./NewTodo.css";

const NewTodo = (props) => {
  const saveHandler = (todoData) => {
    const userTodo = {
      ...todoData,
      id: Math.random().toString(),
    };
    console.log("NEWTODO:::", todoData);
    props.onAddTodo(userTodo);
  };
  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveHandler} />
    </div>
  );
};

export default NewTodo;
