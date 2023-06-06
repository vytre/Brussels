import * as React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const resultatSide = (
        // Header
      <>
    <div className="div-header">
      <div className="e335_198" />
      <div className="e335_200" />
      <div className="e335_201">
        <span className="ei335_201_7_219">Dilemmaer</span>
      </div>
      <div className="e335_202">
        <span className="ei335_202_7_219">Arkiv</span>
      </div>
      <div className="e335_203">
        <span className="ei335_203_7_219">Hjem</span>
      </div>
    </div>
        {/* Tittel*/}
    <div class="div-resultat-tittel">
      <h1 id="tittel-resultat">Resultat</h1>   
    </div>
    {/* tekstbokser*/}
    <div id="tekstBoks1">
      <p id="boks1-p">Her har vi vurdert dine svar og sammenlignet med gjennomsnittet.
      <p>
      Du scoret høyest i krig, og lavest i dypøkologi. <p>
       Vil du lære mer om disse? </p>
      </p>
      </p>
      <button id="videreBtn"type="button">Ta meg videre</button>
    </div>
    <div id="tekstBoks2">
      <p id="boks2-p">
        Gratulerer med gjennomført spill! 
        <p>
          Om du vil kan du nå printe ut diplom.
        </p>
      </p>
      <button id="diplomBtn"type="button">Print diplom</button>
    </div>
     {/* statistikk bokser*/}
    <div id="dineSvar-div">
      <p id="dineSvar-p"> Dine svar </p>
      <div id="dineSvarBlokk-1">
        <p id="ds-score-blokk-1">10</p>
        <p id="blokk-p-1">Krig</p>
      </div>
      <div id="dineSvarBlokk-2">
      <p id="ds-score-blokk-2">8</p>
      <p id="blokk-p-2">Dypøkologi</p>
      </div>
      <div id="dineSvarBlokk-3">
      <p id="ds-score-blokk-3">15</p>
      <p id="blokk-p-3">Minimalisme</p>
      </div>
      </div>
    <div id="gjennomsnitt-div">
    <p id="gjennomsnitt-p">Gjennomsnitt</p>
    <div id="gjennomsnitt-blokk-1">
        <p id="gs-score-blokk-1">10</p>
        <p id="gs-blokk-p-1">Krig</p>
      </div>
      <div id="gjennomsnitt-blokk-2">
      <p id="gs-score-blokk-2">10</p>
      <p id="gs-blokk-p-2">Dypøkologi</p>
      </div>
      <div id="gjennomsnitt-blokk-3">
      <p id="gs-score-blokk-3">15</p>
      <p id="gs-blokk-p-3">Minimalisme</p>
      </div>
    </div>
    </>
);

const element = document.getElementById("app");
const root = createRoot(element);
root.render(resultatSide);
