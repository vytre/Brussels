import * as React from "react";
import { createRoot } from "react-dom/client";

import "./groupSize.css";
function sayHello() {
  alert("You clicked me!");
}

function groupButton() {
  // SHOULD BE DIV, NOT BUTTON
  return (
    <button onClick={sayHello} className="button_Start">
      Start
    </button>
  );
}

function aloneButton() {
  // SHOULD BE DIV, NOT BUTTON
  return (
    <button onClick={sayHello} className="button_ANCEP">
      ANCEP
    </button>
  );
}

const groupSizePage = (
  // FROM SCRATCH

  //CONTAINER SHOULD HAVE BG-IMG AND BG-SHAPES
  <div className="cointainer">
    <div className="header">
      <div className="headerHome">
        <span>Hjem</span>
      </div>

      <div className="headerGame">
        <span>Dilemmaer</span>
      </div>

      <div className="headerArchive">
        <span>Arkiv</span>
      </div>
    </div>

    <div className="backGround"></div>
  </div>

  //from FIGMA

<div className=e337_236>
  <div className="e337_237"></div>
  <div className="e337_238"></div>
  <div className=e349_200>
    <div className="e349_201"></div>
    <div className="e349_202"></div>
    <div className="e349_203"></div>
  </div>

  <div className=e337_239>
    <div className=e337_245>
      <div className="e337_246"></div>
      <span className="e337_247">gruppe</span>
    </div>

    <div className=e337_250>
      <div className="e337_251"></div>
      <span className="e337_253">Alene</span>
      <div className="e337_264"></div>
    </div>
  </div>

  <div className=e337_255>
    <div className="e337_256"></div>
    <div className="e337_257"></div>
    <div className=e337_258>
      <span className="ei337_258_7_219">Arkiv</span>
    </div>

    <div className=e337_259>
      <span className="ei337_259_7_219">Dilemmaer</span>
    </div>

    <div className=e337_260>
      <span className="ei337_260_7_219">Hjem</span>
    </div>
  </div>

  <span className="e337_254">Hvordan jobber du?</span>
  <div className="e337_265"></div>
  <div className="e349_198"></div>
</div>
);
const element = document.getElementById("app");
const root = createRoot(element);
root.render(groupSizePage);
