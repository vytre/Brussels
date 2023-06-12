import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../stylesheets/dilemmaPage/dilemmaCategory.css";

export function DilemmaCategory() {
  const navigate = useNavigate();
  const params = useParams();
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;

  const handleClick = (category) => {
    navigate(`/dilemma/${ageGroup}/${workMode}/${category}`);
    console.log(ageGroup);
    console.log(workMode);
    console.log(category);
    console.log("-------");
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
