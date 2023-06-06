import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "/Header.jsx";
import FrontpageUnder from "/Frontpageunder.jsx"

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





function Frontpage (){
  return (
    <>
    <div className="firstDiv">
    <Header />
    
    </div>

    <FrontpageUnder />
    </>
  );
}
const element = document.getElementById("app");
const root = createRoot(element);
root.render(<Frontpage/>);
