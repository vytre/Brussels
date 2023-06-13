import "../../stylesheets/dilemma/diploma.css";
export function Diploma() {
  // Prompts user for username. Then lets user Print the diploma, inscribed with username.
  let uname = prompt("Navn:");
  return (
    <div id="diplom">
      <div id="diplom-div">
        <p id="diplomNavn" className="printDiplomNavn">
          {uname}
        </p>
        <button
          id="printBtn"
          className="no-print"
          type="button"
          onClick={printUt}
        >
          print ut
        </button>
      </div>
    </div>
  );
  function printUt() {
    print();
  }
}
