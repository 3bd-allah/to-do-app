import React from "react";

const Todo = (props) => {
  return (
    <div className="w-100 border d-flex justify-content-between align-items-center   border-3  p-1 rounded-3 mt-3 ">
      <p className="h6">{props.todo.title}</p>

      <button className="border border-0 ">
        <i class="fa-solid fa-trash fa-bounce"></i>
      </button>
    </div>
  );
};

export default Todo;
