import "./resultat.css"

const resultatSide = (
    <>
    <div className="main-div">
      <div className="containerHeader">
          <div className="header">
            <div className="logo"></div>
            <h1 className="hjem">Hjem</h1>
            <h1 className="dilemmaer">Dilemmaer</h1>
            <h1 className="arkiv">Arkiv</h1>
          </div>
        </div>
      <div className="div-resultat-tittel">
        <h1 className="tittel-resultat">Resultat</h1>   
      </div>
      <div className="midt-div">
        <div className="venstre-div">
      <div className="dineSvar-div">
        <div className="dineSvar-p-div">
        <p className="dineSvar-p"> Dine svar </p>
        </div>
        <div className="blokker-ds-div">
        <div className="dineSvarBlokk-1">
          <p className="ds-score-blokk-1">10</p>
          <p className="blokk-p-1">Krig</p>
        </div>
        <div className="dineSvarBlokk-2">
        <p className="ds-score-blokk-2">8</p>
        <p className="blokk-p-2">Dypøkologi</p>
        </div>
        <div className="dineSvarBlokk-3">
        <p className="ds-score-blokk-3">15</p>
        <p className="blokk-p-3">Minimalisme</p>
        </div>
        </div>
        </div>
      <div className="gjennomsnitt-div">
        <div className="gjennomsnitt-p-div">
        <p className="gjennomsnitt-p">Gjennomsnitt</p>
        </div>
        <div className="gs-blokker-div">
      <div className="gjennomsnitt-blokk-1">
          <p className="gs-score-blokk-1">10</p>
          <p className="gs-blokk-p-1">Krig</p>
        </div>
        <div className="gjennomsnitt-blokk-2">
        <p className="gs-score-blokk-2">10</p>
        <p className="gs-blokk-p-2">Dypøkologi</p>
        </div>
        <div className="gjennomsnitt-blokk-3">
        <p className="gs-score-blokk-3">15</p>
        <p className="gs-blokk-p-3">Minimalisme</p>
        </div>
        </div>
      </div>
      </div>
        <div className="høyre-div">
        <div className="tekstBoks1">
        <p className="boks-p">Her har vi vurdert dine svar og sammenlignet med gjennomsnittet.
        <p>
        Du scoret høyest i krig, og lavest i dypøkologi. <p>
        Vil du lære mer om disse? </p>
        </p>
        </p>
        <button className="btn"type="button">Ta meg videre</button>
      </div>
      <div className="tekstBoks2">
        <p className="boks-p">
          Gratulerer med gjennomført spill! 
          <p>
            Om du vil kan du nå printe ut diplom.
          </p>
        </p>
        <button className="btn"type="button" onClick={render}>Print diplom</button>
      </div>
        </div>
        </div>
      </div>

    </>
);