import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Frontpage } from "./pages/frontpage.jsx";
import QuestionTest from "./utils/questiontest";
import { DilemmaStart } from "./pages/dilemmaStart.jsx";

export function Application() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Frontpage />}></Route>
        <Route path={"/arkiv"} element={<h1>Arkiv Side</h1>}></Route>
        {/*<Route path={"/dilemma"} element={<QuestionTest />}></Route>*/}
        <Route path={"/dilemma"} element={<DilemmaStart />}></Route>
        <Route path={"*"} element={<h1>Page not found</h1>}></Route>
      </Routes>
    </>
  );
}
