import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { WorkMode } from "./dilemma/work-mode.jsx";
import { Category } from "./dilemma/category.jsx";
import { Start } from "./dilemma/start.jsx";
import { Question } from "./dilemma/question.jsx";
import { Result } from "./dilemma/result.jsx";
import { SelectAgeGroup } from "./dilemma/age-group.jsx";
import { Crossroad } from "./dilemma/crossroad.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SelectAgeGroup />}></Route>
        <Route
          path={"/:ageGroup/work-mode"}
          element={<WorkMode />}
        ></Route>
        <Route
          path={"/:ageGroup/:workMode/category"}
          element={<Category />}
        ></Route>
        <Route
          path={"/:ageGroup/:workMode/:category"}
          element={<Start />}
        ></Route>
        <Route
          path={"/:ageGroup/:workMode/:category/questions"}
          element={<Question />}
        ></Route>
        <Route
          path={"/:ageGroup/:workMode/:category/crossroads"}
          element={<Crossroad />}
        ></Route>
        <Route path={"/result"} element={<Result />}></Route>
        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
