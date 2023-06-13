import "../../stylesheets/dilemmaPage/dilemmaCrossroad.css";
import { Header } from "../../utils/header.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import steak from "../../images/steak.jpg";
import salad from "../../images/salad.jpg";

const deepEcology = {
  1: {
    question: "Deep Ecology 1",
    imageOne: "img1",
    imageTwo: "img2",
  },
  2: {
    question: "Deep Ecology 2",
    imageOne: "img1",
    imageTwo: "img2",
  },
  3: {
    question: "Deep Ecology 3",
    imageOne: "img1",
    imageTwo: "img2",
  },
};

const minimalism = {
  1: {
    question: "Minimalism 1",
    imageOne: "img1",
    imageTwo: "img2",
  },
  2: {
    question: "Minimalism 2",
    imageOne: "img1",
    imageTwo: "img2",
  },
  3: {
    question: "Minimalism 3",
    imageOne: "img1",
    imageTwo: "img2",
  },
};

const war = {
  1: {
    question: "War 1",
    imageOne: "../../images/steak.jpg",
    imageTwo: "img2",
  },
  2: {
    question: "War 2",
    imageOne: "img1",
    imageTwo: "img2",
  },
  3: {
    question: "War 3",
    imageOne: "img1",
    imageTwo: "img2",
  },
};

export function DilemmaCrossroad() {
  const navigate = useNavigate();
  const params = useParams();
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;
  const category = params.category;

  function getQuestion() {
    let categoryQuestionObject = {};
    switch (category) {
      case "war":
        categoryQuestionObject = { ...war };

        console.log("war");
        break;
      case "deepEcology":
        categoryQuestionObject = { ...deepEcology };

        console.log("deepEcology");
        break;
      case "minimalism":
        categoryQuestionObject = { ...minimalism };

        console.log("minimalism");
        break;
      default:
        console.log("Bug....");
        break;
    }
    return categoryQuestionObject;
  }

  const questionObject = getQuestion();
  console.log(questionObject);
  const [index, setIndex] = useState(1);
  const [question, setQuestion] = useState(questionObject[1].question);
  const [imageOne, setImageOne] = useState(questionObject[1].imageOne);
  const [imageTwo, setImageTwo] = useState(questionObject[1].imageTwo);

  const handleClick = () => {
    if (index < 4) {
      setIndex(index + 1);
      setQuestion(questionObject[index].question);
      setImageOne(questionObject[index].imageOne);
      setImageTwo(questionObject[index].imageTwo);
    }
    if (index >= 4) {
      navigate("/dilemma/result");
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
          <p className="dilemmaText">{question}</p>
        </div>

        <div className="veggieOrNotContainer">
          <div onClick={handleClick}>
            <img className="saladContainer" src={salad} />
          </div>
          <div onClick={handleClick}>
            <img className="steakContainer" src={steak} />
          </div>
        </div>
      </div>
    </div>
  );
}
