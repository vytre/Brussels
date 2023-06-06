import { RouterProvider } from "react-router-dom";
import { router } from "./index.jsx";
import * as React from "react";

function FrontPage() {
  return (
    <div>
      <RouterProvider router={router} />
      <h1>frontpage</h1>
    </div>
  );
}
export default FrontPage;
