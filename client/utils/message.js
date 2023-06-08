import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const questions = [
  "Er det alltid galt å drepe? ",
  "Bør man ofre personlig glede for naturen?",
  "Er jeg dum?",
];
export function Test() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      {index === questions.length ? (
        <>
          <h1>Gratulerer med fullført quiz</h1>
          <Link to={"/result"}>Trykk for å se resultat</Link>
        </>
      ) : (
        <>
          <h1>{questions[index]}</h1>
          <div>
            <button onClick={handleClick}>Nei</button>
            <button onClick={handleClick}>Ja</button>
          </div>
        </>
      )}
    </div>
  );
}

function Result() {
  return <h1>Gratulerer med fullført quiz din nisse fra result siden!</h1>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Test />} />
        <Route path={"/result"} element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
