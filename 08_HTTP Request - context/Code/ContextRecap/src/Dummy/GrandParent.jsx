import React from "react";
import Parent from "./Parent";

function GrandParent({ username }) {
  return (
    <div>
      <Parent username={username} />
    </div>
  );
}

export default GrandParent;
