import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Frontpage} from "./pages/frontpage.jsx";
import {Archive} from "./pages/archive.jsx";


export function Application() {
    return (
        <>
            <main>
                <Routes>
                    <Route path={"/"} element={<Archive/>}></Route>
                    <Route path={"/arkiv"} element={<Archive />}></Route>
                    <Route path={"*"} element={<h1>Page not found</h1>}></Route>
                </Routes>
            </main>
        </>
    );
}