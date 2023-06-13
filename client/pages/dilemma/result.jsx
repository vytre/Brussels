import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../stylesheets/dilemma/result.css";

export function Result() {
  const navigate = useNavigate();
  const params = useParams();
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;
  const category = params.category;

  const navigateToArchive = navigate("/archive");

  function navigateToDiploma() {
    navigate(`/dilemma/${ageGroup}/${workMode}/${category}/diploma`);
  }

  return (
    <>
      <div className="resultat-main-div">
        <Header />
        <div className="resultat-div-resultat-tittel">
          <h1 className="resultat-tittel-resultat">Resultat</h1>
        </div>
        <div className="resultat-midt-div">
          <div className="resultat-venstre-div">
            <div className="resultat-dineSvar-div">
              <div className="resultat-dineSvar-p-div">
                <p className="resultat-dineSvar-p"> Dine svar </p>
              </div>
              <div className="resultat-blokker-ds-div">
                <div className="resultat-dineSvarBlokk-1">
                  <p className="resultat-ds-score-blokk-1">10</p>
                  <p className="resultat-ds-score-fargeblokk-1"></p>
                  <p className="resultat-blokk-p-2">Dypøkologi</p>
                </div>
                <div className="resultat-dineSvarBlokk-2">
                  <p className="resultat-ds-score-blokk-2">8</p>
                  <p className="resultat-ds-score-fargeblokk-2"></p>
                  <p className="resultat-blokk-p-1">Krig</p>
                </div>
                <div className="resultat-dineSvarBlokk-3">
                  <p className="resultat-ds-score-blokk-3">15</p>
                  <p className="resultat-ds-score-fargeblokk-3"></p>
                  <p className="resultat-blokk-p-3">Minimalisme</p>
                </div>
              </div>
            </div>
            <div className="resultat-gjennomsnitt-div">
              <div className="resultat-gjennomsnitt-p-div">
                <p className="resultat-gjennomsnitt-p">Gjennomsnitt</p>
              </div>
              <div className="resultat-gs-blokker-div">
                <div className="resultat-gjennomsnitt-blokk-1">
                  <p className="resultat-gs-score-blokk-1">10</p>
                  <p className="resultat-gs-score-fargeblokk-1"></p>
                  <p className="resultat-gs-blokk-p-2">Dypøkologi</p>
                </div>
                <div className="resultat-gjennomsnitt-blokk-2">
                  <p className="resultat-gs-score-blokk-2">10</p>
                  <p className="resultat-gs-score-fargeblokk-2"></p>
                  <p className="resultat-gs-blokk-p-1">Krig</p>
                </div>
                <div className="resultat-gjennomsnitt-blokk-3">
                  <p className="resultat-gs-score-blokk-3">15</p>
                  <p className="resultat-gs-score-fargeblokk-3"></p>
                  <p className="resultat-gs-blokk-p-3">Minimalisme</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resultat-høyre-div">
            <div className="resultat-tekstBoks1">
              <p className="resultat-boks-p">
                Her har vi vurdert dine svar og sammenlignet med gjennomsnittet.
                <p>
                  Du scoret høyest i krig, og lavest i dypøkologi.{" "}
                  <p>Vil du lære mer om disse? </p>
                </p>
              </p>
              <button
                className="resultat-btn"
                type="button"
                onClick={navigateToArchive}
              >
                Ta meg videre
              </button>
            </div>
            <div className="resultat-tekstBoks2">
              <p className="resultat-boks-p">
                Gratulerer med gjennomført spill!
                <p>Om du vil kan du nå printe ut diplom.</p>
              </p>
              <button
                className="resultat-btn"
                type="button"
                onClick={navigateToDiploma}
              >
                Få diplom
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
