import * as React from "react";
import { RouterProvider } from "react-router-dom";
import "./stylesheets/group-size.css";
import { router } from "./index.jsx";

function groupSize() {
  return (
    <div className="cointainer">
      <RouterProvider router={router} />
      <div className="backGround"></div>
    </div>
  );
}
export default groupSize;
