function IntroQuesOneIfYes (){
    return (
        <div className="introToGameContainer">
        <div className="abstractGreenShape"/>
        <div className="abstractYellowShape"/>
        <div className="abstractPurpleShape"/>

        <div className="questionOneContainer">
            <div className="questionsOneTextContainer">
            <p className="questionOne">
                Er kjæledyr mer verdt enn en person du ikke kjenner?
            </p>
            </div>

            <div className="yesOrNo">
                <div className="yes">
                <p className="yesTextDesign">Ja</p>
                </div>
                <div className="no">
                <p className="noTextDesign">Nei</p>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default IntroQuesOneIfYes;