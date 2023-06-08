import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/question.css";

export function DilemmaAlder() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/work-mode");
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
