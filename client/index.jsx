import * as React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Application} from "./application.jsx";
import {Archive} from "./pages/archive.jsx"
import {Frontpage} from "./pages/frontpage.jsx";


const element = document.getElementById("app");
const root = createRoot(element);

root.render(
    <BrowserRouter>
        <Archive/>
    </BrowserRouter>
);