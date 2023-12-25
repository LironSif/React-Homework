import React from "react";
import { useContext } from "react";
import { TodosContext } from "./BlogContext/TodosContextProvider";
import { Link, useNavigate } from "react-router-dom";

function Todos() {
  const { todos } = useContext(TodosContext);
  let navigate = useNavigate();

  const todosSliced = todos.slice(0, 10);
  return (
    <div>
      {todosSliced.map((todo) => (
        // <Link state={{ todo }} to={`${todo.id}`}>
        //   {todo.title}
        // </Link>
        <button
          key={todo.id}
          onClick={() => navigate(`${todo.id}`, { state: { todo } })}
        >
          {todo.title}
        </button>
      ))}
    </div>
  );
}

export default Todos;
