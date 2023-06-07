import "../stylesheets/header.css"
export function Header() {
    return (
        <div className="containerHeader">
            <div className="header">
                <div className="logo"></div>
                <h1 className="hjem">Hjem</h1>
                <h1 className="dilemmaer">Dilemmaer</h1>
                <h1 className="arkiv">Arkiv</h1>
            </div>
        </div>
    );
}