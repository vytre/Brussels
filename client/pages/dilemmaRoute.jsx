import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { DilemmaAlder } from "./dilemmaAlder.jsx";
import { DilemmaHvordan } from "./dilemmaHvordan.jsx";
import { DilemmaKategorier } from "./dilemmaKategorier.jsx";
import { DilemmaStart } from "./dilemmaStart.jsx";
import { DilemmaQuestion } from "./dilemmaQuestion.jsx";
import { DilemmaResult } from "./dilemmaResult.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DilemmaAlder />}></Route>
        <Route path={"/hvordan"} element={<DilemmaHvordan />}></Route>
        <Route path={"/kategorier"} element={<DilemmaKategorier />}></Route>
        <Route path={"/start"} element={<DilemmaStart />}></Route>
        <Route path={"/question"} element={<DilemmaQuestion />}></Route>
        <Route path={"/resultat"} element={<DilemmaResult />}></Route>

        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
