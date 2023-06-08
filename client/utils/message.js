
import {createRoot} from "react-dom/client";
import {useState} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

const element = document.getElementById("app");
const root = createRoot(element);

const questions = ['Er det alltid galt å drepe? ', 'Bør man ofre personlig glede for naturen?', 'Er jeg dum?'];
function Application() {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        if (index < questions.length) {
            setIndex(index + 1);
        }
    }

    return (
        <div>
            {index === questions.length ? (
                <>
                <h1>Gratulerer med fullført quiz</h1>
                <Link to={"/result"}>Trykk for å se resultat</Link>
                </>
            ) : (
                <>
                    <h1>{questions[index]}</h1>
                    <div><button onClick={handleClick}>Nei</button>
                        <button onClick={handleClick}>Ja</button></div>
                </>
            )}
        </div>
    );
}

function Result() {
    return <h1>Gratulerer med fullført quiz din nisse fra result siden!</h1>;
}

function Navigation(){
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Application/>}/>
            <Route path={"/result"} element={<Result/>}/>
        </Routes>
    </BrowserRouter>
}



root.render(
    <Navigation/>
);
