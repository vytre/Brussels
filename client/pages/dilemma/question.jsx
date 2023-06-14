import "../../stylesheets/dilemma/question.css";
import * as React from "react";
import { useState } from "react";
import { Header } from "../../utils/header.jsx";
import { useNavigate, useParams } from "react-router-dom";

const deepEcology = {
  1: {
    question: "Er mennesker mer verdt enn dyr?",
    yes: "Er kjældyr mer verdt enn et mennesker du ikke kjenner?",
    no: "Ville du reddet en panda framfor en person?",
  },
  2: {
    question: "Er naturen mer verdt enn mennesker?",
    yes: "Er verdi basert på hva man kan skape?",
    no: "Uten naturen kan ikke mennesker overleve. Er menneske fortsatt mer verdt?",
  },
  3: {
    question: "Er det verdt å teste på dyr?",
    yes: "Hva om det kun er for kosmetiske grunner?",
    no: "Hva om det kan redde menneskeliv?",
  },
};

const minimalism = {
  1: {
    question: "Har alle et ansvar for å kjøpe færre ting i hverdagen?",
    yes: "Hva om dette betyr at folk mister jobben sin, er det fortsatt riktig?",
    no: "Hva om dette går utover menneskeliv og miljø?",
  },
  2: {
    question:
      "Hvis man har mer enn det man trenger, har man en obligasjon om å gi bort ting til de som har mindre?",
    yes: "Hva om livskvaliteten blir redusert for den som må gi bort?",
    no: "Hva om man har mulighet til å redde liv uten å redusere sin egen livskvalitet?",
  },
  3: {
    question: "Er det riktig å bruke penger på ting som har symbolsk verdi?",
    yes: "Ved å ikke kjøpe en dyr klokke så kan man redde 100 menneskeliv, er det fortsatt greit å kjøpe klokken?",
    no: "Hva om man får glede av en gjenstand, er det fortsatt ikke greit å kjøpe en klokke for eksempel? ",
  },
};

const war = {
  1: {
    question: "Er det alltid feil å sende inn soldater i et annet land?",
    yes: "Hva om det er brudd på menneskerettigheter, er det fortsatt alltid feil?",
    no: "Hva om det eskalerer en situasjon, er det fortsatt riktig?",
  },
  2: {
    question:
      "Har vi i Norge et ansvar for å hjelpe Ukraina i konflikten med Russland? ( I dette spørsmålet ser vi bort ifra Nato medlemskap.)",
    yes: "Betyr det at vi har samme ansvar for hvilket som helst land?",
    no: "Hva om Russland hadde truet Norges frihet, betyr det at andre land ikke burde ha hjulpet Norge?",
  },
  3: {
    question:
      "Forestill deg at Norge er i en krigskonflikt Hvis en krigsfange sitter på informasjon som kan redde 100 Norske soldater, er det greit torturere krigsfangen som siste løsning for å redde de Norske soldatene?",
    yes: "Hva om det er brudd på menneskerettigheter, er det fortsatt alltid feil?",
    no: "Hva om det eskalerer en situasjon, er det fortsatt riktig?",
  },
};
export function Question() {
  const params = useParams();
  const category = params.category;
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;

  function getQuestion() {
    // Fills categoryQuestionObject with correct dilemma-object based on user selected category.
    // The category is retrieved from url path

    let categoryQuestionObject = {};
    switch (category) {
      case "war":
        categoryQuestionObject = { ...war };
        break;
      case "deepEcology":
        categoryQuestionObject = { ...deepEcology };

        break;
      case "minimalism":
        categoryQuestionObject = { ...minimalism };
        break;
      default:
        console.log("Bug....");
        alert("Click 'Home'");
        break;
    }
    return categoryQuestionObject;
  }

  const questionObject = getQuestion();

  // We index from 1, and sets first question to the first question in the questionObject
  const [index, setIndex] = useState(1);
  const [question, setQuestion] = useState(questionObject[1].question);
  const navigate = useNavigate();

  const handleClick = (value) => {
    // if question is equal the current indexed question, this means that the user has clicked either yes or no. So the if statement will set the next question to be the followup question to the questionObject question

    if (index < 4) {
      if (question === questionObject[index].question) {
        if (value === "yes") {
          setQuestion(questionObject[index].yes);
        } else if (value === "no") {
          setQuestion(questionObject[index].no);
        }
        setIndex(index + 1);
        // Question is not equal to the "next" question. So the question is updated
      } else if (question !== questionObject[index].question) {
        setQuestion(questionObject[index].question);
      }
    }
    if (index >= 4) {
      // When all questions are looped through, go to next page
      navigate(`/dilemma/${ageGroup}/${workMode}/${category}/crossroads`);
    }
  };

  return (
    <div className="page49">
      <Header />
      <div className="introToGameContainer43">
        <div className="questionOneContainer43">
          <div className="questionsOneTextContainer43">
            <p className="questionOne43">{question}</p>
          </div>
          <div className="yesOrNo43">
            <div className="yes43" onClick={() => handleClick("yes")}>
              <p className="yesTextDesign43">Ja</p>
            </div>
            <div className="no43" onClick={() => handleClick("no")}>
              <p className="noTextDesign43">Nei</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
