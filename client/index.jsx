import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Application } from "./app.jsx";

const element = document.getElementById("app");
const root = createRoot(element);

root.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>
);