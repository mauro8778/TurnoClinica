import { useState } from 'react';
import misTurnos from "../../helper/misTurnos";
import Turno from '../../components/turno/turno';

const MisTurnos=()=>{
const{turno,setTurno} = useState (misTurnos);
    return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div>
            {turno.map((turno) => { 
                <Turno
                    key={turno.id}
                    date={turno.date}
                    time={turno.time}
                    description={turno.description}
                    status={turno.status}
                    />
            })}

        </div>
        </>
    )
}

export default MisTurnos;