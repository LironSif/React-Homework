import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodosContext } from "./BlogContext/TodosContextProvider";

function SingleTodo() {
  const { state } = useLocation();
  const { todos } = useContext(TodosContext);
  const { id } = useParams();

  const findTodo = todos.find((todo) => todo.id === parseInt(id));

  if (!findTodo) {
    return <h2>Todo Not Found</h2>;
  }
  return (
    <div>
      <h1>Todo Id: {id}</h1>
      <h2>Title: {state?.todo?.title}</h2>
      <h4>Completed?: {state?.todo?.completed ? "Done" : "Not Yet"}</h4>
    </div>
  );
}

export default SingleTodo;
