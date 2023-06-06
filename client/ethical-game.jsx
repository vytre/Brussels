import GroupSize from "./group-size.jsx";

//Should work w [] instead of () when returning multiple values
export default function EthicalGame() {
  return [
    <div>
      <h1>DILEMMAER: VELG TRINN</h1>
      <h2>Når du kommer hit skal du få trinnvalg først</h2>
    </div>,
    GroupSize,
  ];
}
