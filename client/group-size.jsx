import * as React from "react";
import { RouterProvider } from "react-router-dom";
import "./stylesheets/group-size.css";
import { router } from "./App.jsx";
import Header from "./header.jsx";

function groupSize() {
  return (
    <div className="page">
      <div className="heading"></div>
      <div className="container">
        <div className="age-group">
          <h2>Alene</h2>
        </div>

        <div className="age-group">
          <h2>Gruppe</h2>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}
export default groupSize;
