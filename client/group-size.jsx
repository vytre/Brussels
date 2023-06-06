import * as React from "react";
import { RouterProvider } from "react-router-dom";
import "./stylesheets/group-size.css";
import FrontPage from "./front-page.jsx";
import EthicalGame from "./ethical-game.jsx";
import Archive from "./archive";
import { router } from "./index.jsx";

export default function groupSize() {
  return (
    <div className="cointainer">
      <RouterProvider router={router} />

      <div className="backGround"></div>
    </div>
  );
}
