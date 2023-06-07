import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "./header.css"

import "./introQuesOne.css"
import IntroQuestionOne from "/introQuesOne.jsx"

import './introTogame.css'
import IntroToGame from "/introToGame.jsx" 

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
    <div className="main">
    <div className="firstDiv">
    <Header />
    
    </div>

    <div className="secondDiv">
    <FrontpageUnder />
    </div>

    </div>
    </>
  );
}

function Fordubegynner() {
  return (
    <>
    <div className="mainCon">
    <Header/>
    <div className="introGame">
    <IntroToGame />
    </div>
    
    </div>
    
    </>
  );
}

function IntroQuestion(){
  return (
    <>
    <div className="mainCon">
    <Header />
    <div className="introGame">
    <IntroQuestionOne />
    </div>
    
    </div>
    </>

  );
}


const element = document.getElementById("app");
const root = createRoot(element);
root.render(<IntroQuestion/>);
