import * as React from "react";
import {createRoot} from "react-dom/client";


import './index.css';
function sayHello() {
  alert('You clicked me!');
}

function Button_Start() {
  return (
    <button onClick={sayHello} className="button_Start">Start</button>
  );
}

function Button_ANCEP() {
  return (
    <button onClick={sayHello} className="button_ANCEP">ANCEP</button>
  );
}

function Button_Arkivet() {
  return (
    <button onClick={sayHello} className="button_Arkivet">Arkivet</button>
  );
}


const startside = (
  <div className="e44_708">
      <div className="e44_709" />
      <div className="e335_209">
        <span className="e44_711">
          Her kan du teste din oppfatning av diverse dilemmaer. Man blir stilt
          spørsmål, og deretter velger man selv hva som riktig å gjøre i en gitt
          situasjon. Det er ingen svar som er riktig eller feil.
        </span>
        <span className="e44_721">
          ANCEP skal bidra til at Arne Næss’ tanker blir gjort lett tilgjengelige
          for alle.
        </span>
        <div className="e44_726" />
        <div className="e324_178" />
        <div className="e44_1144" />
        <div className="e44_740" />
        <div className="buttonBG_ANCEP">

          <Button_ANCEP />
        </div>
      </div>
      <div className="e335_208">
        <span className="e44_713">
          ANCEP er organiasjonen som bidrar til å tilgjengeligegjøre Arne Næss
          sine værk. De har et stort, og variert arkiv av Arne Næss sine tanker,
          og meninger. Med dette så kan alle dykke dypt inn i Arne Næss sin
          verden.
        </span>
        <span className="e44_722">Hva er ANCEP?</span>
        <div className="e44_736" />
        <div className="e324_179" />
        <div className="e44_738" />
        <div className="e44_739" />

      </div>
      <div className="e335_207">
        <div className="e44_718">
          <span className="e44_719">
            Arne var en norsk filosof, kjent for sin lidenskap til natur og
            mennesker. han blir sett på som mannen bak dypøkologien og var en
            veldig innflytningsrik filosof. Arne sine ideer om verden lever videre
            den dag idag.
          </span>
          <div className="e44_720" />
        </div>
        <div className="e44_727" />
        <div className="e318_171" />
        <span className="e44_725">Hvem var Arne?</span>
        <div className="e44_735" />
        <div className="buttonBG_Arkivet">
          <Button_Arkivet />
        </div>
      </div>
      <div className="e335_191">
        <div className="e335_192" />
        <div className="e339_189">
          <div className="e335_193" />

          <span className="e335_196">
            Her kan du teste din oppfatning av diverse dilemmaer. Man blir stilt
            spørsmål, og deretter velger man selv hva som riktig å gjøre i en gitt
            situasjon. Det er ingen svar som er riktig eller feil.
          </span>
          <div className="buttonBG_Start">
            <Button_Start />
          </div>
        </div>
        <div className="e335_197" />
        <span className="e335_199">Etisk Spill</span>
        <div className="e335_215">
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
      </div>
    </div>

);
const element = document.getElementById("app");
const root = createRoot(element);

root.render(startside)
