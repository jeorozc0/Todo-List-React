import React, { useState } from "react";

type Props = {
  updateTodos: (arg0: any) => void;
};
const InputTodo = ({ updateTodos }: Props) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const newTodo = await response.json();

      updateTodos(newTodo);

      console.log(response);
    } catch (err) {
      let errorMessage = "Failed to do something exceptional";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.log(errorMessage);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          id="todoInput"
          className="form-control"
          placeholder="Enter todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
