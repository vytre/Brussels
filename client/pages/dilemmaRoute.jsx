import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { DilemmaStart } from "./dilemmaStart.jsx";

export function DilemmaRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DilemmaStart />}></Route>
        <Route path={"/hvordan"} element={<h1>Hvordan Jobbe i lag</h1>}></Route>
        <Route path={"/kategorier"} element={<h1>Velg Kategori</h1>}></Route>
        <Route path={"/før"} element={<h1>Før vi Begynner</h1>}></Route>
        <Route path={"/spørsmål"} element={<h1>Spørsmål</h1>}></Route>
        <Route path={"/resultat"} element={<h1>resultat</h1>}></Route>

        <Route path={"*"} element={<h1>Dilemma Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}
