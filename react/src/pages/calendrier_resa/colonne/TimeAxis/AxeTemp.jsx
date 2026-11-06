import './AxeTemp.css'
function AxeTemp() {
    const heures = [];
    heures.push(
        <div className="ligneHeure" key={0} >

        </div>
    )
    for (let i = 1; i < 25; i+=0.5) {
        const heure = Math.floor(i-1);
        const minute = (i % 1 === 0) ? '00' : '30';
        heures.push(
            <div className="ligneHeure" key={i}>
                {`${heure}:${minute}`}
            </div>
        )
    }
    return (
        <>
            <div className="calendrier-reservation-heures">

                {heures}


            </div>
        </>
    )
}

export default AxeTemp