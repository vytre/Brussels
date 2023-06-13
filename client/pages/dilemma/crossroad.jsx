import "../../stylesheets/dilemma/crossroad.css";
import { Header } from "../../utils/header.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const deepEcology = {
  1: {
    crossroad:
      "Burde man innføre kjøttfrie dager i kantinen på skolen? Trykk på salaten dersom du mener dette burde innføres, eller biffen dersom du mener dette ikke burde innføres.",
    answer1: "Ja",
    answer2: "Nei",
  },
  2: {
    crossroad:
      "Burde vi slutte med oljeutvinning, og kun fokusere på fornybar energi? Hvis ja, trykk på vindmøllen. Hvis nei, trykk på oljeriggen.",
    answer1: "Ja",
    answer2: "Nei",
  },
  3: {
    crossroad:
      "Har forbrukere større ansvar for resirkulering enn selskaper som lager produkter? Hvis ja, trykk på søppelbøtten. Hvis nei, trykk på mannen med søppel bak seg.",
    answer1: "Ja",
    answer2: "Nei",
  },
};

const minimalism = {
  1: {
    crossroad:
      "La oss si at det er 1 år siden du kjøpte en ny telefon. \n" +
      "Burde man la være å kjøpe en ny telefon etter 1 år? \n" +
      "Hvis ja, trykk på den gamle telefon. Hvis nei, trykk på de nyere telefonene",
    answer1: "Ja",
    answer2: "Nei",
  },
  2: {
    crossroad:
      'I enkelte U-land er det mennesker som jobber under dårlige kår, dette blir ofte bli omtalt som "sweatshops", \n' +
      "og i mange tilfeller har disse fabrikkene høyt utslipp av Co2. Er det riktig å ikke kjøpe varer fra U-land,\n" +
      "og med dette risikere inntekten til de som jobber der, eller burde man alltid tenke på miljøet først?\n" +
      "Trykk på treet hvis du mener at naturen alltid kommer først. Trykk arbeiderne på hvis du mener at man burde fortsette\n" +
      "å kjøpe varer med høyt Co2-utslipp, og sørge for at arbeiderne fortsatt har en jobb.",
    answer1: "Naturen først",
    answer2: "Mennesket først",
  },
  3: {
    crossroad:
      "Har vi alle et ansvar for å kjøpe mer brukte klær for å redusere overforbruk? Hvis ja, trykk på den grønne posen. Hvis nei, trykk på den røde posen.",
    answer1: "Ja",
    answer2: "Nei",
  },
};
const war = {
  1: {
    crossroad:
      "Se for deg at du er i en krigssone, og du er på vei til et viktig oppdrag. Du møter en gjeter, og du vet ikke om gjeteren er til å stole på.\n" +
      "Lar du gjeter gå, og riskerer at han kan oppgi posisjonen din til fienden? Eller holder du gjeteren fanget?\n" +
      "Trykk på bildet hvor gjeteren går hvis du mener at han burde få gå. Trykk på bildet hvor gjeteren er fanget hvis du mener han burde være fanget.",
    answer1: "Fri",
    answer2: "Fanget",
  },
  2: {
    crossroad:
      "Se for deg samme dilemma som forrige, men i dette tilfellet så er det garantert at gjeteren kommer til å sladre, og du kan ikke ta med deg eller holde gjeteren fanget.\n" +
      "Er det da riktig å drepe gjeteren, eller å la gjeteren gå? Trykk på bilde hvor gjeteren går hvis du mener han burde få gå. Trykk på bilde hvor gjeteren\n" +
      "er fanget hvis du mener det er riktig å drepe.",
    answer1: "Drepe",
    answer2: "Slipp fri",
  },
  3: {
    crossroad:
      "Er det riktig at Norske fremmedkrigere reiser til Ukraina for å kjempe for Ukraina? \n" +
      "Hvis ja, trykk på det Ukrainske flagget. Hvis nei, trykk på det Norske flagget.",
    answer1: "Ja",
    answer2: "Nei",
  },
};
export function Crossroad() {
  const params = useParams();
  const category = params.category;
  const ageGroup = params.ageGroup;
  const workMode = params.workMode;
  function getCrossroad() {
    let categoryCrossroadObject = {};
    switch (category) {
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
  const [crossroad, setCrossroad] = useState(
    categoryCrossroadObject[1].crossroad
  );

  const handleClick = (value) => {
    //hardcoded value with a getLength of the json obj?

    console.log(index);
    setIndex(index + 1);
    setCrossroad(categoryCrossroadObject[index].crossroad);

    if (index < 4) {
      console.log(index);
      if (value === 1) {
        //STORE USER ANSWER HERE with agegroup, category, crossroad index
      } else if (value === 2) {
        //STORE USER ANSWER HERE with agegroup, category, crossroad index
      }
    } else if (index >= 4) {
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
          <p className="dilemmaText">{crossroad}</p>
        </div>

        <div className="dilemmaImageContainer">
          <div
            className={category + "Crossroad" + index + "Answer1"}
            onClick={() => handleClick(1)}
          />
          <div
            className={category + "Crossroad" + index + "Answer2"}
            onClick={() => handleClick(2)}
          />
        </div>
      </div>
    </div>
  );
}
