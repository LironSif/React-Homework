import React from "react";
import Child from "./Child";

function Parent({ username }) {
  return (
    <div>
      <Child username={username} />
    </div>
  );
}

export default Parent;
