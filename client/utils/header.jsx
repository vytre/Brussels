import "../stylesheets/header.css"
import {Link} from "react-router-dom";
export function Header() {
    return (
        <div className="containerHeader">
            <div className="header">
                <div className="logo"></div>
                <Link to={"/arkivens"} className={"linkHjem"}><h1 className="hjem">Hjem</h1></Link>
                <Link to={"/dilemma"} className={"linkDilemma"}><h1 className="dilemmaer">Dilemmaer</h1></Link>
                <Link to={"/arkiv"} className={"linkArkiv"}><h1 className="arkiv">Arkiv</h1></Link>
            </div>
        </div>
    );
}