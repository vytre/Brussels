import "../../stylesheets/dilemmaPage/dilemmaQuestion.css";
import * as React from "react";
import { useState } from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate, useParams } from "react-router-dom";

const war = [
  "Er det alltid feil å sende inn soldater i et annet land?",
  "Har vi i Norge et ansvar for å hjelpe Ukraina i konflikten med Russland?\n(I dette spørsmålet ser vi bort ifra Nato medlemskap.)",
  "Forestill deg at Norge er i en krigskonflikt\nHvis en krigsfange sitter på informasjon som kan redde 100 Norske soldater, er det greit å torturere krigsfangen som siste løsning for å redde de Norske soldatene?",
];

const deepEcology = [
  "Er mennesker mer verdt enn dyr?",
  "Er naturen mer verdt enn mennesker?",
  "Er det verdt å teste på dyr?",
];

const minimalism = [
  "Har alle et ansvar for å kjøpe færre ting i hverdagen?",
  "Hvis man har mer enn det man trenger, har man en obligasjon om å gi bort ting til de som har mindre?",
  "Er det riktig å bruke penger på ting som har symbolsk verdi?",
];

/*const questions = [
  {
    war: [
      "Er det alltid feil å sende inn soldater i et annet land?",
      "Har vi i Norge et ansvar for å hjelpe Ukraina i konflikten med Russland?\n(I dette spørsmålet ser vi bort ifra Nato medlemskap.)",
      "Forestill deg at Norge er i en krigskonflikt\nHvis en krigsfange sitter på informasjon som kan redde 100 Norske soldater, er det greit å torturere krigsfangen som siste løsning for å redde de Norske soldatene?",
    ],
  },
  {
    deepEcology: [
      "Er mennesker mer verdt enn dyr?",
      "Er naturen mer verdt enn mennesker?",
      "Er det verdt å teste på dyr?",
    ],
  },
  {
    minimalism: [
      "Har alle et ansvar for å kjøpe færre ting i hverdagen?",
      "Hvis man har mer enn det man trenger, har man en obligasjon om å gi bort ting til de som har mindre?",
      "Er det riktig å bruke penger på ting som har symbolsk verdi?",
    ],
  },
];*/

function getQuestion(category) {
  let categoryQuestionList = [];

  switch (category) {
    case "war":
      categoryQuestionList = [...war];

      console.log("war");
      console.log(categoryQuestionList[0]);
      break;
    case "deepEcology":
      categoryQuestionList = [...deepEcology];

      console.log("deepEcology");
      console.log(categoryQuestionList);
      break;
    case "minimalism":
      categoryQuestionList = [...minimalism];

      console.log("minimalism");
      console.log(categoryQuestionList[0]);
      break;
    default:
      console.log("Bug....");
      break;
  }
  return categoryQuestionList;
}

export function DilemmaQuestion() {
  const params = useParams();
  const category = params.category;
  const questions = getQuestion(category);

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
    if (index >= questions.length - 1) {
      navigate("/dilemma/crossroads");
    }
  };

  return (
    <>
      <Header />
      <div className="introToGameContainer43">
        <div className="questionOneContainer43">
          <div className="questionsOneTextContainer43">
            <p className="questionOne43">{questions[index]}</p>
          </div>
          <div className="yesOrNo43">
            <div className="yes43" onClick={handleClick}>
              <p className="yesTextDesign43">Ja</p>
            </div>
            <div className="no43" onClick={handleClick}>
              <p className="noTextDesign43">Nei</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
