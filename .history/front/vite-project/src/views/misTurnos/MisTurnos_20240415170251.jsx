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

        <><div className='container-turns'>
            <div className='turns'>
                <div>
                    <form action="" className='formTurnos'>
                        <div>
                            <h2>
                                Agenda tu turno
                            </h2>
                        </div>
                        <div className='Turnero'>
                        <label htmlFor="">Fecha:
                            <input type="date" />
                        </label>
                        <label htmlFor="">Hora:
                            <input type="text" name="" id="" />
                        </label>
                        <label htmlFor="">Descripcion:
                            <input type="text" />
                        </label>
                        <button>Agendar</button>
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