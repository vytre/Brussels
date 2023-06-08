import { Header } from "../utils/header.jsx";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/question.css";

export function DilemmaStart() {
  const questions = [
    "Er det alltid galt å drepe? ",
    "Bør man ofre personlig glede for naturen?",
    "Er jeg dum?",
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/hvordan");
  };

  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">Velg Alder</p>
            </div>
            <div className="yesOrNo">
              <div className="yes" onClick={handleClick}>
                <p className="yesTextDesign">5-7</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">8-10</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">VGS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
