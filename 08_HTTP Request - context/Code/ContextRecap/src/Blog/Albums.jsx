import React from "react";
import { Link, Outlet } from "react-router-dom";

function Albums() {
  return (
    <div>
      <h1>My Album</h1>
      <Link to={`song`}>My Song</Link>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Albums;
