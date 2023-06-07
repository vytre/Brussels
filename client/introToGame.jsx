function IntroToGame (){
    return (
        <div className="introToGameContainer">
            <div className="abstractGreenShape"/>
            <div className="abstractYellowShape"/>
            <div className="abstractPurpleShape"/>
            <div className="introTextBox">
                
                <p className="introVognText">
                Dette spillet er basert på et tankeeksperiment, "Vogn-problemet". Før vi starter så trenger
                vi å stille dere noen introuksjons spørsmål for å få et innblikk i deres tanker om moral etikk.
                Her finnes det ingen gale svar, bare velg alternativet som passer best med ditt syn på saken.
                </p>
                <div className="goForward">
                    <h1 className="goForwardText">Gå videre</h1>
                </div>
                
            </div>
        </div>
    );
}

export default IntroToGame;