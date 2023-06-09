import "../../stylesheets/dilemmaAlder.css";
import * as React from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function DilemmaSelectAgeGroup() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/work-mode");
  };

  return (
    <div className="pageAge">
      <Header />
      <div className="containerAge">
        <div className="tittelAge">Velg Aldersgruppe</div>
        <div className="ageGroupAge">
          <div className="brownBoxAge">
            <div className="brownImgAge" onClick={handleClick}></div>
          </div>
          <div className="greenBoxAge">
            <div className="greenImgAge" onClick={handleClick}></div>
          </div>
          <div className="purpBoxAge">
            <div className="purpImgAge" onClick={handleClick}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
