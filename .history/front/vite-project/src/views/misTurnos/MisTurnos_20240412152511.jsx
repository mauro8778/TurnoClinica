import { useState } from "react";
import misTurnos from "../../helper/misTurnos";

const MisTurnos=()=>{
const{turnos ,setTurnos}=useState(misTurnos);
console.log(misTurnos)
    return(

        <>
        <p>
            estamos en mis turnos
        </p>
        </>
    )
}

export default MisTurnos;