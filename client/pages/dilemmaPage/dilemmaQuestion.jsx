import "../../stylesheets/dilemmaPage/dilemmaQuestion.css";
import * as React from "react";
import { useState } from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function DilemmaQuestion() {
  const questions = [
    "Er mennesker mer verdt enn dyr?",
    /* "Er naturen mer verdt enn mennesker?",
    "Er det verdt å teste på dyr?",*/
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
    if (index >= questions.length - 1) {
      navigate("/dilemma/crossroads");
    }
  };

  return (
    <>
      <Header />
      <div className="introToGameContainer43">
        <div className="questionOneContainer43">
          <div className="questionsOneTextContainer43">
            <p className="questionOne43">Er mennesker mer verdt enn dyr?</p>
          </div>
          <div className="yesOrNo43">
            <div className="yes43" onClick={handleClick}>
              <p className="yesTextDesign43">Ja</p>
            </div>
            <div className="no43" onClick={handleClick}>
              <p className="noTextDesign43">Nei</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
