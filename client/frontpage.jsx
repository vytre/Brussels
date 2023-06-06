import * as React from "react";
import { createRoot } from "react-dom/client";
import './styles.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

const element = document.getElementById("app");
const root = createRoot(element);

function Header() {
    return <div className={"container"}>
        <div className={"divHome"}><Link to={"/"} className={"linkHome"}>Hjem</Link></div>
        <div className={"divEthicsGame"}><Link to={"/game"} className={"linkEthics"}>
            EtikkSpill</Link></div>
        <div className={"divArchive"}>
            <Link to={"/archive"} className={"linkArchive"}>Arkiv</Link>
        </div>
    </div>;
}

function FrontPage() {
    return <div>
        <Header/>
        <div>
            <Link to={"/game"}><h1>PLAY GAME</h1></Link>
        </div>
    </div>;
}

function EthicalGame() {
    return <div>
        <Header/>
        <h1>Welcome to Ethical Game</h1>
    </div>;
}

function Archive() {
    return <div>
        <Header/>
        <h1>Welcome to ANCEP</h1>
        <p>ANCEP was founded by brave men in the trenches and reload succsessful</p>
    </div>;
}

function Application() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"}  element={<FrontPage/>}/>
                <Route path="/game" element={<EthicalGame/>}/>
                <Route path={"/archive"} element={<Archive/>}/>
            </Routes>
        </BrowserRouter>
        <h1>hallo</h1>
    </div>
}



root.render(
    <Application/>
);