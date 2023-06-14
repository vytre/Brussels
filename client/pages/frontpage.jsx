import * as React from "react";

import "../stylesheets/frontpage.css";
import { Header } from "../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function Frontpage() {
  const navigate = useNavigate();

  const startButton = () => {
    navigate("/dilemma");
  };

  function ancepButton() {
    window.location.href = "https://ancep.no/";
  }

  function archiveButton() {
    navigate("/archive");
  }

  return (
    <div className="main_columnStartside">
      <div className="starside_topp">
        <Header />
        <div className="infoBoxStartside">
          <h1 className="titleStartside">Etisk Spill</h1>
          <div className="infoTextBoxStartside">
            <p className="startGameTextStartside">
              Her kan du teste din oppfatning av diverse dilemmaer. Man blir
              stilt spørsmål, og deretter velger man selv hva som er riktig å
              gjøre i en gitt situasjon. Det er ingen svar som er riktig.
            </p>
          </div>
          <div className="startGameStartside" onClick={startButton}>
            <h1 className="startTitleStartside">Start</h1>
          </div>
        </div>
      </div>
      <div className="box_yellowStartside">
        <div className="row1_yellowStartside">
          <div className="text_boxStartside">
            <div className="text_header_yellowStartside">
              <h2>
                ANCEP skal bidra til at
                <br /> Arne Næss’ tanker blir
                <br /> gjort lett tilgjengelige for
                <br /> alle.
              </h2>
            </div>

            <p className="text_yellowStartside">
              ANCEP er organiasjonen som
              <br /> bidrar til å tilgjengeligegjøre Arne
              <br /> Næss sine værk. De har et stort,
              <br /> og variert arkiv av Arne Næss sine
              <br /> tanker, og meninger. Med dette så
              <br /> kan alle dykke dypt inn i Arne
              <br /> Næss sin verden.
            </p>

            <div className="ancepButton" onClick={ancepButton}>
              <h1 className="ancepButtonTitle">ANCEP</h1>
            </div>
          </div>
        </div>

        <div className="row2_yellowStartside">
          <div className="arne_klatrer"></div>
          <div className="colorbox_yellowStartside"></div>
        </div>
      </div>

      <div className="box_blueStartside">
        <div className="row1_blueStartside">
          <div className="arne_fjellet"></div>
          <div className="colorbox_blueStartside"></div>
        </div>

        <div className="row2_blueStartside">
          <div className="text_box_blueStartside">
            <div className="text_header_blueStartside">
              <h2>Dypøkologien</h2>
            </div>

            <p className="text_blueStartside">
              Dypøkologien Arne Næss var dypt
              <br />
              interessert i dypøkologi, og anses
              <br />
              som grunnleggeren av dette feltet.
              <br />
              Dette handler om at alt liv har
              <br />
              verdi, og at mennesker
              <br />
              burde tilpasse seg naturen.
              <br />
              Selv om Arne
              <br />
              Næss skrev om mange andre
              <br />
              temaer som krig, så
              <br />
              var det dypøkologien
              <br />
              han var mest kjent for.
            </p>
          </div>
        </div>
      </div>

      <div className="box_greenStartside">
        <div className="row1_greenStartside">
          <div className="text_box_greenStartside">
            <div className="text_header_greenStartside">
              <h2>Hvem var Arne?</h2>
            </div>

            <p className="text_greenStartside">
              Arne var en norsk filosof, kjent for
              <br /> sin lidenskap til natur og
              <br />
              mennesker. han blir sett på som
              <br /> mannen bak dypøkologien og var
              <br /> en veldig innflytningsrik filosof.
              <br /> Arne sine ideer om verden lever
              <br /> videre den dag idag.
            </p>

            <div className="archiveButton" onClick={archiveButton}>
              <h1 className="archiveTitle">Archive</h1>
            </div>
          </div>
        </div>
        <div className="row2_greenStartside">
          <div className="arne_glad"></div>
          <div className="colorbox_greenStartside"></div>
        </div>
      </div>
    </div>
  );
}
