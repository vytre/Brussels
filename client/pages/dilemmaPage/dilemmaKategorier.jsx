import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/question.css";

export function DilemmaKategorier() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/start-message");
  };

  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">Velg Kategori</p>
            </div>
            <div className="yesOrNo">
              <div className="yes" onClick={handleClick}>
                <p className="yesTextDesign">Minalisme</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">Dypøkologi</p>
              </div>
              <div className="no" onClick={handleClick}>
                <p className="noTextDesign">Kritisk Tenkning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
