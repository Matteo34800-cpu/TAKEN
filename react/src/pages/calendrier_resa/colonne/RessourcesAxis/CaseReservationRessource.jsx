import './CaseReservationRessource.css'
function CaseReservationRessource({isReserved}) {

    if (isReserved) {
        return (
            <div className="ligneResa rouge" >
            </div>
        )
    }else {
        return (
            <div className="ligneResa vert" >
            </div>
        )
    }

}

export default CaseReservationRessource