import { Header } from "../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/question.css";

export function DilemmaResult() {
  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">Resultat Side</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
