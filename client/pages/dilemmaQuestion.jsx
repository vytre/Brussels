import "../stylesheets/question.css";
import * as React from "react";
import { useState } from "react";
import { Header } from "../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function DilemmaQuestion() {
  const questions = [
    "Er mennesker mer verdt enn dyr?",
    "Er naturen mer verdt enn mennesker?",
    "Er det verdt å teste på dyr?",
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
    if (index >= questions.length - 1) {
      navigate("/dilemma/resultat");
    }
  };

  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">{questions[index]}</p>
            </div>

            <div className="yesOrNo">
              <div className="yes" onClick={handleClick}>
                <p className="yesTextDesign">Ja</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">Nei</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
