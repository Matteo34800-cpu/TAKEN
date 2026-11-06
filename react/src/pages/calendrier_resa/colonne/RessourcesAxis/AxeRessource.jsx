import './AxeRessources.css'
import CaseReservationRessource from "./CaseReservationRessource.jsx";
function AxeRessource({name}) {

    const colonne_resources = [];
    colonne_resources.push(
        <div className="ligneNomRessource" key="resource-name">
            {name}
        </div>
    )
    for (let i = 0; i < 24; i+=0.5) {
        colonne_resources.push(
            <CaseReservationRessource isReserved={false} key={i}/>
        )
    }
    return (
        <>
            <div className="calendrier-reservation-ressources">

                {colonne_resources}


            </div>
        </>
    )
}

export default AxeRessource