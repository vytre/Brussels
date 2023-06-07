import * as React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./diskusjon.css";

const resultatSide = (
  <>
  <div className="main-div">
    <div className="containerHeader">
				<div className="header">
					<div className="logo"></div>
					<h1 className="hjem">Hjem</h1>
					<h1 className="dilemmaer">Dilemmaer</h1>
					<h1 className="arkiv">Arkiv</h1>
				</div>
			</div>
        {/* Tittel*/}
    <div className="div-resultat-tittel">
      <h1 className="tittel-resultat">Resultat</h1>   
    </div>
    {/* tekstbokser*/}
    <div className="tekstBoks1">
      <p className="boks1-p">Her har vi vurdert dine svar og sammenlignet med gjennomsnittet.
      <p>
      Du scoret høyest i krig, og lavest i dypøkologi. <p>
       Vil du lære mer om disse? </p>
      </p>
      </p>
      <button className="videreBtn"type="button">Ta meg videre</button>
    </div>
    <div className="tekstBoks2">
      <p className="boks2-p">
        Gratulerer med gjennomført spill! 
        <p>
          Om du vil kan du nå printe ut diplom.
        </p>
      </p>
      <button className="diplomBtn"type="button">Print diplom</button>
    </div>
     {/* statistikk bokser*/}
    <div className="dineSvar-div">
      <p className="dineSvar-p"> Dine svar </p>
      <div className="dineSvarBlokk-1">
        <p className="ds-score-blokk-1">10</p>
        <p className="blokk-p-1">Krig</p>
      </div>
      <div className="dineSvarBlokk-2">
      <p className="ds-score-blokk-2">8</p>
      <p className="blokk-p-2">Dypøkologi</p>
      </div>
      <div className="dineSvarBlokk-3">
      <p className="ds-score-blokk-3">15</p>
      <p className="blokk-p-3">Minimalisme</p>
      </div>
      </div>
    <div className="gjennomsnitt-div">
    <p className="gjennomsnitt-p">Gjennomsnitt</p>
    <div className="gjennomsnitt-blokk-1">
        <p className="gs-score-blokk-1">10</p>
        <p className="gs-blokk-p-1">Krig</p>
      </div>
      <div className="gjennomsnitt-blokk-2">
      <p className="gs-score-blokk-2">10</p>
      <p className="gs-blokk-p-2">Dypøkologi</p>
      </div>
      <div className="gjennomsnitt-blokk-3">
      <p className="gs-score-blokk-3">15</p>
      <p className="gs-blokk-p-3">Minimalisme</p>
      </div>
    </div>
    </div>
    </>
);

const diskusjonSide = (
  <>
<div className="main-div">
<div className="containerHeader">
        <div className="header">
          <div className="logo"></div>
          <h1 className="hjem">Hjem</h1>
          <h1 className="dilemmaer">dilemmaer</h1>
          <h1 className="arkiv">Arkiv</h1>
      </div>
      <div className="diskuter-wrap">
        <div className ="diskuter-tittel-div">
          <h1 className="diskuter-tittel-h">Diskuter!</h1>
        </div>
      <div className="bilde-boks">
        <div className="diskuter-bilde"></div>
        <div className="button-div-diskuter">
          <button className="diskuter-ferdig-btn" type="button">Ferdig</button>
        </div>
        </div>
        </div>
    </div>
    </div>
  </>

)
const element = document.getElementById("app");
const root = createRoot(element);
root.render(resultatSide);
