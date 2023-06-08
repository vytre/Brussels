import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Kategori } from "./kategori.jsx";

export function Application() {
    return (
        <>
            <main>
                <Routes>
                    <Route path={"/kategori"} element={<Kategori />}></Route>
                    <Route path={"/hjem"} element={<h1>Hjem side</h1>}></Route>
                    <Route path={"/arkiv"} element={<h1>Arkiv side</h1>}></Route>
                    <Route path={"*"} element={<h1>Page not found</h1>}></Route>
                </Routes>
            </main>
        </>
    );
}