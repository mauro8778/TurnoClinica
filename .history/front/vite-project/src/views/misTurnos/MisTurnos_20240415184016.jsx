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

    const [turnData,setturnData]=useState({
        date:"",
        time:"",
        description:""
    })
    
return(

        <>
        <div className='container-turns'>
            <div className='turns'>
                <div>
                    <form action="" className='formTurnos'>
                        <div>
                            <h2>
                                Agenda tu Turno
                            </h2>
                        </div>
                        <div className="turnero">
                        <label htmlFor="">Fecha</label>
                            <input type="date" />
                        
                        <label htmlFor="">Hora </label>
                            <input type="time" name="" id="" />
                        <label htmlFor="">Especialidad del Turno </label>
                            <input type="text" className="especialidad" />
                        <button className="agendar">Agendar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <h1>
            Mis Turnos
        </h1>

        <div className='conteiners'>
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
        
        </div>
        </>
    )
}

export default MisTurnos;