import {IntroQuestionsOne} from "../pages/question";
import {Header} from "./header.jsx";

function QuestionTest(){
    return (
        <div className={"mainCon"}>
            <Header />
            <div className={"questContain"}>
                <IntroQuestionsOne/>
            </div>
        </div>

    );
}

export default QuestionTest;