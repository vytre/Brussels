import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/dilemmaHvordan.css";

export function DilemmaWorkMode() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/category");
  };

  return (
    <>
      <Header />
      <div className="pageHow">
        <div className="containerHow">
          <div className="headingHow">Hvordan jobber du?</div>
          <div className="ageGroupHow">
            <div className="greenBoxHow" onClick={handleClick}>
              <div className="aloneImgHow"></div>
              <div className="textHow">Alene</div>
            </div>
            <div className="purpBoxHow" onClick={handleClick}>
              <div className="groupImgHow"></div>
              <div className="textHow">Gruppe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
