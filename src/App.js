import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
function App() {
  const todo = [
    {
      id: "T1",
      title: "Upload new meeting",
      priority: "Low",
      date: new Date(2022, 3, 10),
    },
    {
      id: "T2",
      title: "New email received",
      priority: "Medium",
      date: new Date(2022, 4, 10),
    },
    {
      id: "T3",
      title: "Shopping list checked",
      priority: "High",
      date: new Date(2022, 3, 12),
    },
    {
      id: "T4",
      title: "Payments Pending",
      priority: "Low",
      date: new Date(2022, 3, 10),
    },
  ];

  const todoFinalHanlder = (finalData) => {
    console.log("APP::", finalData);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoFinalHanlder} />
      <Todos item={todo} />
    </div>
  );
}

export default App;
