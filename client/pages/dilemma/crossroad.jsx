import "../../stylesheets/dilemma/crossroad.css";
import { Header } from "../../utils/header.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

const deepEcology = {
  1: {
    crossroad: "Burde man innføre kjøttfrie dager i kantinen på skolen? Trykk på salaten dersom du mener dette burde innføres, eller biffen dersom du mener dette ikke burde innføres.",
    answer1: "Ja",
    answer2: "Nei"},
  2: {
    crossroad: "Burde vi slutte med oljeutvinning, og kun fokusere på fornybar energi? Hvis ja, trykk på vindmøllen. Hvis nei, trykk på oljeriggen.",
    answer1: "Ja",
    answer2: "Nei"},
  3: {
    crossroad: "Har forbrukere større ansvar for resirkulering enn selskaper som lager produkter? Hvis ja, trykk på søppelbøtten. Hvis nei, trykk på mannen med søppel bak seg.",
    answer1: "Ja",
    answer2: "Nei"
  },
};

const minimalism = {
  1: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"},
  2: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"},
  3: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"
  },
};
const war = {
  1: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"},
  2: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"},
  3: {
    crossroad: "I the crossroad",
    answer1: "answer1Test",
    answer2: "answer2Test"
  },
};
export function Crossroad() {
  const params = useParams();
  const category = params.category;
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;
  function getCrossroad(){
    let categoryCrossroadObject = {};
    switch (category){
      case "war":
        categoryCrossroadObject = { ...war };
        console.log("war");
        break;
      case "deepEcology":
        categoryCrossroadObject = { ...deepEcology };
        console.log("deepEcology");
        break;
      case "minimalism":
        categoryCrossroadObject = { ...minimalism };
        console.log("minimalism");
        break;
      default:
        console.log("Bug....");
        break;
    }
    return categoryCrossroadObject;
  }

  const navigate = useNavigate();
  const categoryCrossroadObject = getCrossroad();
  const [index, setIndex] = useState(1);
  const [crossroad, setCrossroad] = useState(categoryCrossroadObject[1].crossroad);

  const handleClick = (value) => {

    //hardcoded value with a getLength of the json obj?
   if(index < 4){
     if(value === 1){
       //STORE USER ANSWER HERE with agegroup, category, crossroad index
     } else if(value === 2){
       //STORE USER ANSWER HERE with agegroup, category, crossroad index
     }
     setIndex(index + 1);
     setCrossroad(categoryCrossroadObject[index].crossroad)
   }else if (index >= 4) {
     navigate(`/dilemma/${ageGroup}/${workMode}/${category}/result`);
   }
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

        <div className="dilemmaImageContainer">
          <div className={(category) + "Crossroad" + (index) + "Answer1"} onClick={()=> handleClick(1)} />
          <div className={(category) + "Crossroad" + (index) + "Answer2"} onClick={()=> handleClick(2)} />
        </div>
      </div>
    </div>
  );
}
