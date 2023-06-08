import { Header } from "../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/question.css";

export function DilemmaHvordan() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/kategorier");
  };

  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">Hvordan jobber du?</p>
            </div>
            <div className="yesOrNo">
              <div className="yes" onClick={handleClick}>
                <p className="yesTextDesign">Alene</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">Gruppe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
