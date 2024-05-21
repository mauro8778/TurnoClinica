import { useState } from "react";
import misTurnos from "../../helper/misTurnos";
import turno from "../../components/misTurnos/turno";

const MisTurnos=()=>{
const{turnos, setTurnos} = useState (misTurnos);
console.log(misTurnos)
    return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div>
            {turnos.map(turno)=> { 
                return <turno/>
            })}

        </div>
        </>
    )
}

export default MisTurnos;