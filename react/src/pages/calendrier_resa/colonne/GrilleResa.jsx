import './GrilleResa.css'
import AxeTemp from "./TimeAxis/AxeTemp.jsx";
import AxeRessource from "./RessourcesAxis/AxeRessource.jsx";
function GrilleResa() {

    return (
        <>
            <div className="ListeResa">
                <AxeTemp/>
                <AxeRessource name={"Test"}/>

            </div>
        </>
    )
}

export default GrilleResa