import "../stylesheets/question.css";
import * as React from "react";
import { useState } from "react";

export function IntroQuestionsOne() {
  const questions = [
    "Er det alltid galt å drepe? ",
    "Bør man ofre personlig glede for naturen?",
    "Er jeg dum?",
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
  };

  return (
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
  );
}
