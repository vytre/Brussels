import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { DilemmaHvordan } from "./dilemmaPage/dilemmaHvordan.jsx";
import { DilemmaKategorier } from "./dilemmaPage/dilemmaKategorier.jsx";
import { DilemmaStart } from "./dilemmaPage/dilemmaStart.jsx";
import { DilemmaQuestion } from "./dilemmaPage/dilemmaQuestion.jsx";
import { DilemmaResult } from "./dilemmaPage/dilemmaResult.jsx";
import { Test } from "./dilemmaPage/dilemmaAlder.jsx";
import { DilemmaOneEco } from "./dilemmaPage/dilemmaOneEco.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Test />}></Route>
        <Route path={"/work-mode"} element={<DilemmaHvordan />}></Route>
        <Route path={"/category"} element={<DilemmaKategorier />}></Route>
        <Route path={"/start-message"} element={<DilemmaStart />}></Route>
        <Route path={"/questions"} element={<DilemmaQuestion />}></Route>
        <Route path={"/crossroads"} element={<DilemmaOneEco />}></Route>
        <Route path={"/result"} element={<DilemmaResult />}></Route>
        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
