import React from "react";
import { useContext } from "react";
import MyContext from "./MyContext";
function MyChild() {
  const { data } = useContext(MyContext);
  return (
    <div>
      {data.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
}

export default MyChild;
