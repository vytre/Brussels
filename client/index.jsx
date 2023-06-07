import { createRoot } from "react-dom/client";
import * as React from "react";
import App from "./App.jsx";

const element = document.getElementById("app");
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
