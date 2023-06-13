import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../stylesheets/dilemma/result.css";
import { useState } from "react";

const deepEcology = {
  1: {
    question: "Er mennesker mer verdt enn dyr? --> Nei",
    answer: "Ville du reddet en panda framfor en person? --> Nei",
  },
  2: {
    question: "Er naturen mer verdt enn mennesker? --> Ja",
    answer: "Er verdi basert på hva man kan skape? --> Ja",
  },
  3: {
    question: "Er det verdt å teste på dyr? --> Ja",
    answer: "Hva om det kun er for kosmetiske grunner? --> Nei",
  },
};

const war = {
  1: {
    question: "Er mennesker mer verdt enn dyr? --> Nei",
    answer: "Ville du reddet en panda framfor en person? --> Nei",
  },
  2: {
    question: "Er naturen mer verdt enn mennesker? --> Ja",
    answer: "Er verdi basert på hva man kan skape? --> Ja",
  },
  3: {
    question: "Er det verdt å teste på dyr? --> Ja",
    answer: "Hva om det kun er for kosmetiske grunner? --> Nei",
  },
};

const minimalism = {
  1: {
    question: "Er mennesker mer verdt enn dyr? --> Nei",
    answer: "Ville du reddet en panda framfor en person? --> Nei",
  },
  2: {
    question: "Er naturen mer verdt enn mennesker? --> Ja",
    answer: "Er verdi basert på hva man kan skape? --> Ja",
  },
  3: {
    question: "Er det verdt å teste på dyr? --> Ja",
    answer: "Hva om det kun er for kosmetiske grunner? --> Nei",
  },
};

export function Result() {
  const params = useParams();
  const category = params.category;
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;

  function getQuestion() {
    let categoryQuestionObject = {};
    switch (category) {
      case "war":
        categoryQuestionObject = { ...war };
        console.log("war");
        break;
      case "deepEcology":
        categoryQuestionObject = { ...deepEcology };
        console.log("deepEcology");
        break;
      case "minimalism":
        categoryQuestionObject = { ...minimalism };
        console.log("minimalism");
        break;
      default:
        console.log("Bug....");
        break;
    }
    return categoryQuestionObject;
  }

  const questionObject = getQuestion();
  console.log(questionObject);

  const navigate = useNavigate();
  const handleClick = navigate("/archive");

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
                <p> {questionObject[1].question} </p>
                <p> {questionObject[1].answer} </p>
                <p> {questionObject[2].question} </p>
                <p> {questionObject[2].answer} </p>
                <p> {questionObject[3].question} </p>
                <p> {questionObject[3].answer} </p>
              </div>
            </div>
            <div className="resultat-gjennomsnitt-div">
              <div className="resultat-gjennomsnitt-p-div">
                <p className="resultat-gjennomsnitt-p">Dine svar Dilemma</p>
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
                onClick={handleClick}
              >
                Ta meg videre
              </button>
            </div>
            <div className="resultat-tekstBoks2">
              <p className="resultat-boks-p">
                Gratulerer med gjennomført spill!
                <p>Om du vil kan du nå printe ut diplom.</p>
              </p>
              <button className="resultat-btn" type="button">
                Print diplom
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
