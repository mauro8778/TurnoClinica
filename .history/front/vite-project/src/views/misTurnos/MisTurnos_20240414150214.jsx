import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"

const MisTurnos=()=>{
const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:3000/appoiment")
      .then((res)=>setTurnos(res.data));
    },[]);
    
return(

        <>
        <h1>
            Mis Turnos
        </h1>

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