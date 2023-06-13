import "../../stylesheets/dilemma/age-group.css";
import * as React from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function SelectAgeGroup() {
  const navigate = useNavigate();

  const handleClick = (ageGroup) => {
    navigate(`/dilemma/${ageGroup}/work-mode`);
  };

  return (
    <div className="pageAge">
      <Header />
      <div className="containerAge">
        <div className="tittelAge">Velg Aldersgruppe</div>
        <div className="ageGroupAge">
          <div className="brownBoxAge">
            <div
              className="brownImgAge"
              onClick={() => handleClick("5-7")}
            ></div>
          </div>
          <div className="greenBoxAge">
            <div
              className="greenImgAge"
              onClick={() => handleClick("8-10")}
            ></div>
          </div>
          <div className="purpBoxAge">
            <div
              className="purpImgAge"
              onClick={() => handleClick("vgs")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
