  import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/dilemmaPage/dilemmaStart.css";

export function DilemmaStart() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/questions");
  };

  return (
    <div className="page42">
      <Header />
      <div className="introToGameContainer42">
        <div className="titleContainer42">
          <h1 className="introTitle42">Før du begynner</h1>
        </div>

        <div className="introTextBox42">
          <p className="introVognText42">
            Dette spillet er basert på et tankeeksperiment, "Vogn-problemet".
            Før vi starter så trenger vi å stille dere noen introuksjons
            spørsmål for å få et innblikk i deres tanker om moral etikk. Her
            finnes det ingen feil svar, bare velg alternativet som passer best
            med ditt syn på saken.
          </p>

          <div className="goForward42" onClick={handleClick}>
            <h1 className="goForwardText42">Gå videre</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
