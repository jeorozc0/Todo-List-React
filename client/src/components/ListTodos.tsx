import { useEffect } from "react";

import EditTodo from "./EditTodo";

type Props = {
  todos: any[];
  setTodos: (arg0: any) => void;
  updateTodos: (arg0: any) => void;
};


const ListTodos = ({ todos, setTodos, updateTodos }: Props) => {
  //delete todo function
  const deleteTodo = async (id: number) => {
    try {
      const deleteTodo = await fetch(`http://localhost:8080/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));

      console.log(deleteTodo);
    } catch (err) {
      let errorMessage = "Failed to do something exceptional";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos");
        const jsonData = await response.json();
        setTodos(jsonData);
      } catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };
    getTodos();
  }, [setTodos, updateTodos]);

  console.log(todos);
  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} updateTodos={updateTodos} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
