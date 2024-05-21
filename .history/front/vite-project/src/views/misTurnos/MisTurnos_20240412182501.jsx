import { useState } from 'react';
import misTurnos from "../../helper/misTurnos";
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";

const MisTurnos=()=>{
const [turnos, setTurnos] = useState(misTurnos);
    return(

        <>
        <div className="main-container">
    <p>
        estamos en mis turnos
    </p>

    <div className='container'>
        {turnos.map((turno) => ( 
            <Turno
                key={turno.id}
                date={turno.date}
                time={turno.time}
                description={turno.description}
                status={turno.status}
            />
        ))}
    </div>
</div>
        </>
    )
}

export default MisTurnos;