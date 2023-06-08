import * as React from "react";

import "client/stylesheets/kategori.css";


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

export function Kategori() {
    return (
        <>
            <div className="flex-container">
                <div className="containerHeader">
                    <div className="header">
                        <div className="hjem">Hjem</div>
                        <div className="dilemmaer">Dilemmaer</div>
                        <div className="arkiv">Arkiv</div>
                        <div className="logo"></div>
                    </div>
                </div>
                <div className="kategori-div">
                    <h1 className="kategori-h1">Kategorier</h1>
                </div>
                <div>
                    <img className="BG" src="/client/images/BG-IMG.png" alt=""/>
                </div>
                <div className="minimalisme-div">
                    <img className="minimalisme-picture" src="/client/images/Minimalisme.png" alt=""/>
                </div>
                <div className="dypøkologi-div">
                    <img className="dypøkologi-picture" src="/client/images/Dypøkologi.png" alt=""/>
                </div>
                <div className="kritisk-div">
                    <img className="kritisk-picture" src="/client/images/Hverdag.png" alt=""/>
                </div>
            </div>
        </>
    );
}