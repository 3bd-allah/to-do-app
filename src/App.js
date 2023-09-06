import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
function App() {
  const [todos, setTodos] = useState([]);

  function getFormValue(data) {
    newTodo(data);
  }

  const newTodo = (todoTitle) => {
    if (todoTitle === "") {
      alert("Enter your task first!");
      console.log("Error!");
      return;
    } else if (todos.find((todo) => todo.title.trim() === todoTitle.trim())) {
      return;
    } else {
      const todo = {
        id: Date.now(),
        title: todoTitle,
        done: false,
      };
      const allTodos = [...todos, todo];
      setTodos(allTodos);
    }
  };
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-5 d-flex justify-content-center ">
        <div className="border m-3 p-5 w-50 rounded-4">
          <h3 className="mb-5">Make Things Done!</h3>
          <TodoForm onSubmit={getFormValue} />
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
