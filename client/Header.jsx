function Header() {
    return (
        <div className="containerHeader">
            <div className="header">
                <h1 className="hjem">Hjem</h1>
                <h1 className="dilemmaer">Dilemmaer</h1>
                <h1 className="arkiv">Arkiv</h1>
            </div>
            <div className="infoBox">
            <h1 className="title">Etisk Spill</h1>
                <div className="infoTextBox">
                    <p className="startGameText">Her kan du teste din oppfatning av diverse dilemmaer. Man blir stilt spørsmål, og deretter
                    velger man selv hva som er riktig å gjøre i en gitt situasjon. Det er ingen svar som er riktig.</p>
                </div>
                <div className="startGame">
                    <h1 className="startTitle">Start</h1>
                </div>
            </div>
        </div>

    );
}

export default Header;