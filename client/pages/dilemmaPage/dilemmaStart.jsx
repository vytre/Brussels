import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/question.css";

export function DilemmaStart() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/questions");
  };

  return (
    <div className={"mainCon"}>
      <Header />
      <div className={"questContain"}>
        <div className="introToGameContainer">
          <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
              <p className="questionOne">
                Dette spillet er basert på et tankeeksperiment,
                "Vogn-problemet". Før vi starter så trenger vi å stille dere
                noen introuksjons spørsmål for å få et innblikk i deres tanker
                om moral etikk. Her finnes det ingen feil svar, bare velg
                alternativet som passer best med ditt syn på saken.
              </p>
            </div>
            <div className="yesOrNo">
              <div className="yes" onClick={handleClick}>
                <p className="yesTextDesign">Start Game!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
