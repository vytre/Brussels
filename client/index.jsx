import * as React from "react";
import ReactDOM from "react-dom/client";
import groupSize from "./group-size.jsx";
import FrontPage from "./front-page.jsx";
import EthicalGame from "./ethical-game.jsx";
import Archive from "./archive";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./header.jsx";
import FrontPage from "./front-page.jsx";
import EthicalGame from "./ethical-game.jsx";
import Archive from "./archive.jsx";
import groupSize from "./group-size.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<FrontPage />} />
      <Route path="dilemmaer" element={<EthicalGame />} />
      <Route path="arkivet" element={<Archive />} />
    </Route>
  )
);

const element = document.getElementById("app");
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <groupSize />
  </React.StrictMode>
);
