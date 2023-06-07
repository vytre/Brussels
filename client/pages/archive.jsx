import "../stylesheets/archive.css"
export function Archive() {
    return(
  <div className="page">
      <div className="containerHeader">
              <div className="header">
                  <div className="logo"></div>
                  <h1 className="hjem">Hjem</h1>
                  <h1 className="dilemmaer">Dilemmaer</h1>
                  <h1 className="arkiv">Arkiv</h1>
              </div>
          </div>
      <div className="topContainer">
          <div className="heading"></div>
          <div className="text"></div>
      </div>
      <div className="container">
          <div className="infoContainer">
              <div className="arneHammerImg"></div>
              <div className="box">
                  <div className="h2">Arkiv</div>
                  <div className="h3">Proffessor, fjellklatrer, Ridder av St. Olavs Orden. Men hvem var Arne Næss egentlig</div>
                  <div className="h4">Arne var en norsk filosof, kjent for sin lidenskap til natur og mennesker. Han blir sett på som mannen bak dypøkologien og var en veldig innflytningsrik filosof. Arne sine ideer om verden er like aktuelle idag som de var når han levde.</div>
              </div>
          </div>
          <div className="infoContainer">
              <div className="box">
                  <div className="h2">Arne Næss kunnskapssamling</div>
                  <div className="h4">ANCEP har til nå identifisert i overkant av 3400 dokumenter. En oversikt over disse finner du her. Samlingen inneholder alt fra; bøker, artikler, brev, bilder.</div>
                  <button className="btn"></button>
              </div>
              <div className="arneAktivImg"></div>
          </div>
      </div>
  </div>
    );
}