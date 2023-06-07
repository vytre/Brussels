import * as React from "react";
import { createRoot } from "react-dom/client";

import "./stylesheets/style.css";
function sayHello() {
  alert("You clicked me!");
}

function Button_Start() {
  return (
    <button onClick={sayHello} className="button_Start">
      Start
    </button>
  );
}

function Button_ANCEP() {
  return (
    <button onClick={sayHello} className="button_ANCEP">
      ANCEP
    </button>
  );
}

function Button_Arkivet() {
  return (
    <button onClick={sayHello} className="button_Arkivet">
      Arkivet
    </button>
  );
}
const groupSize = (

    <div className="page">
      <div className="containerHeader">
        <div className="header">
          <div className="logo"></div>
          <h1 className="hjem">Hjem</h1>
          <h1 className="dilemmaer">Dilemmaer</h1>
          <h1 className="arkiv">Arkiv</h1>
        </div>
      </div>

      <div className="container">
        <div className="heading">Hvordan jobber du?</div>
        <div className="ageGroup">
          <div className="greenBox">
            <div className="aloneImg"></div>
            <div className="text">Alene</div>
            
          </div>
          <div className="purpBox">
            <div className="groupImg"></div>
            <div className="text">Gruppe</div>
          </div>
        </div>
      </div>
    </div>
);
const element = document.getElementById("app");
const root = createRoot(element);
root.render(groupSize);
