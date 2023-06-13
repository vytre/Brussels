import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../stylesheets/dilemma/category.css";

export function Category() {
  const navigate = useNavigate();
  const params = useParams();
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;

  // Navigates user to the next page, and saves category in url path
  const handleClick = (category) => {
    navigate(`/dilemma/${ageGroup}/${workMode}/${category}`);
  };

  return (
    <div className="pageCategory">
      <Header />
      <div className="containerCategory">
        <div className="headingCategory">Velg kategori</div>
        <div className="ageGroupCategory">
          <div
            className="brownBoxCategory"
            onClick={() => handleClick("war")}
          ></div>

          <div
            className="greenBoxCategory"
            onClick={() => handleClick("deepEcology")}
          ></div>
          <div
            className="purpBoxCategory"
            onClick={() => handleClick("minimalism")}
          ></div>
        </div>
      </div>
    </div>
  );
}
