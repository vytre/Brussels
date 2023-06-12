import "../stylesheets/archive.css";
import { Header } from "../utils/header.jsx";

export function Archive() {
  function ancepDocButton() {
    window.location.href = "https://ancep.no/docs/";
  }

  return (
    <div className={"mainCon"}>
      <div className="pageArchive">
        <div className="topContainerArchive">
          <Header />
          <div className="topBoxArchive">
            <div className="topInfoBoxArchive">
              <div className="headingContainerArchive">
                <div className="headingArchive">Arnes Historie</div>
              </div>
              <div className="bgBoxContainerArchive">
                <div className="bgBoxArchive">
                  <div className="textArchive">
                    Arne Næss var en norsk filosof som var en de mest
                    innflytelsesrike intellektuelle i Norge i andre halvdel av
                    1900-tallet. Gjennom Næss' innflytelse fikk analytisk
                    filosofi en dominerende stilling i Norge i tiårene etter
                    andre verdenskrig. Han var også kjent som fjellklatrer,
                    friluftsmann og aktivist i norsk natur- og miljøvern. I
                    Norge ble han særlig kjent gjennom sin deltakelse i
                    aksjonene mot utbyggingen av Mardøla (1970) og Alta
                    (1979–1981, se Alta-saken). Næss regnes som grunnleggeren av
                    dypøkologien som filosofisk retning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="containerArchive">
          <div className="infoContainerArchive">
            <div className="arneHammerImgArchive"></div>
            <div className="boxArchive">
              <div className="h2Archive">Arkiv</div>
              <div className="h3Archive">
                Proffessor, fjellklatrer, Ridder av St. Olavs Orden. Men hvem
                var Arne Næss egentlig
              </div>
              <div className="h4Archive">
                Arne var en norsk filosof, kjent for sin lidenskap til natur og
                mennesker. Han blir sett på som mannen bak dypøkologien og var
                en veldig innflytningsrik filosof. Arne sine ideer om verden er
                like aktuelle idag som de var når han levde.
              </div>
            </div>
          </div>

          <div className="infoContainer2Archive">
            <div className="box2Archive">
              <div className="h2Archive">Arne Næss kunnskapssamling</div>
              <div className="h4Archive">
                ANCEP har til nå identifisert i overkant av 3400 dokumenter. En
                oversikt over disse finner du her. Samlingen inneholder alt fra;
                bøker, artikler, brev, bilder.
              </div>
              <button className="btnArchive" onClick={ancepDocButton}>
                Kunnskapssamlingen
              </button>
            </div>
            <div className="arneAktivImgArchive"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
