import "../../stylesheets/dilemmaPage/dilemmaCrossroad.css";
import { Header } from "../../utils/header.jsx";
import { useNavigate } from "react-router-dom";

export function DilemmaCrossroad() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dilemma/result");
  };
  return (
    <div className="pageCrossRoads">
      <Header />
      <div className="introToGameContainer">
        <div className="titleContainer">
          <h1 className="dilemmaTitle">Dilemma</h1>
        </div>

        <div className="dilemmaTextContainer">
          <p className="dilemmaText">
            Burde man innføre kjøttfrie dager i kantinen på skolen? Trykk på
            salaten dersom du mener dette burde innføres, eller biffen dersom du
            mener dette ikke burde innføres.
          </p>
        </div>

        <div className="veggieOrNotContainer">
          <div className="saladContainer" onClick={handleClick} />
          <div className="steakContainer" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
