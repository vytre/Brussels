import * as React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./header.jsx";
import FrontPage from "./front-page.jsx";
import EthicalGame from "./ethical-game.jsx";
import Archive from "./archive.jsx";
import GroupSize from "./group-size.jsx";

//Routes for website
export const router = createBrowserRouter(
  /* Cant decide if I should create route for each page in game or if
     EthicalGameshould retur the pages on its own with some logic.
     Probably a MIX!*/
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<FrontPage />} />
      <Route path="dilemmaer" element={<EthicalGame />} />
      <Route path="arkivet" element={<Archive />} />
    </Route>
  )
);

const element = document.getElementById("app");
const root = createRoot(element);

//Should render FrontPage, but is set to groupSize for this branch
root.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>
);
