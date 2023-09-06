import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="mt-5">
      {props.todos.length > 0 && (
        <div>
          <h3 className="text-start mt-3">Todos</h3>
          
          {props.todos.map((todo) => (<Todo key={todo.id} todo={todo} />))}
        </div>
      )}
    </div>
  );
};

export default Todos;
