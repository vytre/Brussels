import "../../stylesheets/dilemmaAlder.css";
import * as React from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function Test() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/work-mode");
  };

  return (
    <div className="page">
      <Header />

      <div className="container">
        <div className="heading">Velg Aldersgruppe</div>
        <div className="ageGroup">
          <div className="brownBox" onClick={handleClick}>
            <div className="brownImg"></div>
          </div>

          <div className="greenBox" onClick={handleClick}>
            <div className="greenImg"></div>
          </div>
          <div className="purpBox" onClick={handleClick}>
            <div className="purpImg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
