import {Header} from "../utils/header.jsx";
import
const handleClick = () => {
    navigate("/dilemma/result");
};
export function DilemmaOneEco () {
    return (
        <>
            <Header />
            <div className="introToGameContainer">

                <div className="titleContainer">
                    <h1 className="dilemmaTitle">Dilemma</h1>
                </div>

                <div className="dilemmaTextContainer">
                    <p className="dilemmaText">Burde man innføre kjøttfrie dager i kantinen på skolen? Trykk på salaten dersom du mener dette burde innføres, eller biffen dersom du mener dette ikke burde innføres.</p>
                </div>

                <div className="veggieOrNotContainer">
                    <div className="saladContainer"/>
                    <div className="steakContainer"/>
                </div>

            </div>
        </>

    );
}
