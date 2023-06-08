import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { DilemmaAlder } from "./dilemmaAlder.jsx";
import { DilemmaHvordan } from "./dilemmaHvordan.jsx";
import { DilemmaKategorier } from "./dilemmaKategorier.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DilemmaAlder />}></Route>
        <Route path={"/hvordan"} element={<DilemmaHvordan />}></Route>
        <Route path={"/kategorier"} element={<DilemmaKategorier />}></Route>
        <Route path={"/start"} element={<h1>Før vi Begynner</h1>}></Route>
        <Route path={"/spørsmål"} element={<h1>Spørsmål</h1>}></Route>
        <Route path={"/resultat"} element={<h1>resultat</h1>}></Route>

        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
