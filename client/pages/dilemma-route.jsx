import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "./dilemma/category.jsx";
import { WorkMode } from "./dilemma/work-mode.jsx";
import { Start } from "./dilemma/start.jsx";
import { Question } from "./dilemma/question.jsx";
import { Crossroad } from "./dilemma/crossroad.jsx";
import { Result } from "./dilemma/result.jsx";
import { SelectAgeGroup } from "./dilemma/age-group.jsx";
import { Diploma } from "./dilemma/diploma.jsx";

export function DilemmaRoute() {
  return (
    <>
      {/*user choice is saved using "useParams"
       useParams saves the user choice in the url path, which can be retrieved later */}
      <Routes>
        <Route path={"/"} element={<SelectAgeGroup />}></Route>
        <Route path={"/:ageGroup/work-mode"} element={<WorkMode />}></Route>
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
        <Route
          path={"/:ageGroup/:workMode/:category/result"}
          element={<Result />}
        ></Route>
        <Route
          path={"/:ageGroup/:workMode/:category/diploma"}
          element={<Diploma />}
        ></Route>
        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
