import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css"

const MisTurnos=()=>{
const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
     fetch("http://localhost:3000/appoiment")
      .then((response)=>response.json())
      .then((data)=> setTurnos(data))
    },[]);
    
return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div className='conteiner'>
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