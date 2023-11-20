import React from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = React.useState<any[]>([]);

  const newTodo = (newTodo: any) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodos = (updatedTodo: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.todo_id === updatedTodo.todo_id) {
          todo.description = updatedTodo.description;
        }
        return todo;
      })
    );
  }

  return (
    <>
      <div className="container">
        <InputTodo updateTodos={newTodo} />
        <ListTodos todos={todos} setTodos={setTodos} updateTodos={updateTodos} />
      </div>
    </>
  );
}

export default App;
