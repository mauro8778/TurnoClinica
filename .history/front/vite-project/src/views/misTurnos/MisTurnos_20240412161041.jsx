import { useState } from "react";
import misTurnos from "../../helper/misTurnos";
import Turno from "../misTurnos/MisTurnos.jsx"

const MisTurnos=()=>{
const{turnos, setTurnos} = useState (misTurnos);
console.log(misTurnos)
    return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div>
            {turnos.map((Turno) => { 
                return <Turno 
                key={Turno.id}
                date={Turno.date}
                time={Turno.time}
                description={Turno.description}
                status={Turno.status}
                />
            })}

        </div>
        </>
    )
}

export default MisTurnos;