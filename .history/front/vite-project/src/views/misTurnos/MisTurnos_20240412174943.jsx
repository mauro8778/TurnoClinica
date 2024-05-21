import { useState } from 'react';
import misTurnos from "../../helper/misTurnos";
import Turno from "../../components/turno/turno.jsx"

const MisTurnos=()=>{
const [turnos, setTurnos] = useState(misTurnos);
    return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div>
            {turnos.map((turno) => { 
             return (<Turno
                    key={turno.id}
                    date={turno.date}
                    time={turno.time}
                    description={turno.description}
                    status={turno.status}
                    />)
            })}

        </div>
        </>
    )
}

export default MisTurnos;