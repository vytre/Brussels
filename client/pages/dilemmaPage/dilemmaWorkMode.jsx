import { Header } from "../../utils/header.jsx";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../stylesheets/dilemmaPage/dilemmaWorkMode.css";

export function DilemmaWorkMode() {
  const navigate = useNavigate();
  const params = useParams();
  const ageGroup = params.ageGroup;

  const handleClick = (workMode) => {
    console.log(ageGroup);
    console.log(workMode);
    console.log("-------");
    navigate(`/dilemma/${ageGroup}/${workMode}/category`);
  };

  return (
    <>
      <div className="pageHow">
        <Header />
        <div className="containerHow">
          <div className="headingHow">Hvordan jobber du?</div>
          <div className="ageGroupHow">
            <div className="greenBoxHow" onClick={() => handleClick("alone")}>
              <div className="aloneImgHow"></div>
              <div className="textHow">Alene</div>
            </div>
            <div className="purpBoxHow" onClick={() => handleClick("group")}>
              <div className="groupImgHow"></div>
              <div className="textHow">Gruppe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
