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
        <div className="heading">Velg Aldersgruppe</div>
        <div className="ageGroup">
          
          <div className="brownBox">
            <div className="brownImg"></div>
          </div>

          <div className="greenBox">
            <div className="greenImg"></div>

            
          </div>
          <div className="purpBox">
            <div className="purpImg"></div>
            <div className="text">VGS <br /></div>
          </div>

        </div>
      </div>
    </div>
);
const element = document.getElementById("app");
const root = createRoot(element);
root.render(groupSize);
