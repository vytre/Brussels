import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { DilemmaWorkMode } from "./dilemmaPage/dilemmaWorkMode.jsx";
import { DilemmaCategory } from "./dilemmaPage/dilemmaCategory.jsx";
import { DilemmaStart } from "./dilemmaPage/dilemmaStart.jsx";
import { DilemmaQuestion } from "./dilemmaPage/dilemmaQuestion.jsx";
import { DilemmaResult } from "./dilemmaPage/dilemmaResult.jsx";
import { DilemmaSelectAgeGroup } from "./dilemmaPage/dilemmaAgeGroup.jsx";
import { DilemmaCrossroad } from "./dilemmaPage/dilemmaCrossroad.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DilemmaSelectAgeGroup />}></Route>
        <Route path={"/work-mode"} element={<DilemmaWorkMode />}></Route>
        <Route path={"/category"} element={<DilemmaCategory />}></Route>
        <Route path={"/start-message"} element={<DilemmaStart />}></Route>
        <Route path={"/questions"} element={<DilemmaQuestion />}></Route>
        <Route path={"/crossroads"} element={<DilemmaCrossroad />}></Route>
        <Route path={"/result"} element={<DilemmaResult />}></Route>
        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
