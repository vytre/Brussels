import * as React from "react";

import "./stylesheets/trinnvalg.css";
import { Header } from "./utils/header.jsx";

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

export function Trinnvalg() {
  return (
    <>
      <div className="trinnvalg">
        <div className="background-image"></div>
        <div className="header-div">
          <div className="header">
            <div className="hjem">Hjem</div>
            <div className="dilemmaer">Dilemmaer</div>
            <div className="arkiv">Arkiv</div>
          </div>
        </div>
        <div className="trinn-div">
          <div className="trinn">Velg trinn</div>
        </div>
        <div className="pictures-div">
          <div className="giraffe-div">
            <div className="giraffe-picture"></div>
          </div>
          <div className="bear-div">
            <div className="bear-picture"></div>
            <div className="monkey-picture"></div>
          </div>
          <div className="lion-div">
            <div className="lion-picture"></div>
          </div>
        </div>
      </div>
    </>
  );
}
