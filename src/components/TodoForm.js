import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
const TodoForm = (props) => {
  const [todoValue, setTodoValue] = useState("");

  const textChange = (data) => {
    const value = data.target.value;
    setTodoValue(value);
  };

  return (
    <div className="">
      <InputGroup className="mb-3 ">
        <Form.Control
          placeholder="Enter your task..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={textChange}
        />
        <Button variant="success" onClick={() => props.onSubmit(todoValue)}>
          New Task
        </Button>
      </InputGroup>
    </div>
  );
};

export default TodoForm;
