import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/kategori.css";

export function DilemmaKategorier() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dilemma/start-message");
  };

  return (
    <div className="pageCategory">
      <Header />
      <div className="containerCategory">
        <div className="headingCategory">Velg kategori</div>
        <div className="ageGroupCategory">
          <div className="brownBoxCategory" onClick={handleClick}></div>

          <div className="greenBoxCategory" onClick={handleClick}></div>
          <div className="purpBoxCategory" onClick={handleClick}></div>
        </div>
      </div>
    </div>
  );
}
