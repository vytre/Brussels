import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Frontpage } from "./pages/frontpage.jsx";
import { Archive } from "./pages/archive.jsx";
import { DilemmaRoute } from "./pages/dilemma-route.jsx";

export function Application() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Frontpage />}></Route>
        <Route path={"/archive"} element={<Archive />}></Route>
        {/*All rotes under /dilemma are handled in dilemma-route.jsx*/}
        <Route path={"/dilemma/*"} element={<DilemmaRoute />}></Route>
        <Route path={"*"} element={<h1>Page not found</h1>}></Route>
      </Routes>
    </>
  );
}
