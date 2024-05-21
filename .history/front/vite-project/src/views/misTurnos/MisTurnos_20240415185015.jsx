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

    const FormularioTurno = () => {
        const [date, setdate] = useState("");
        const [time, settime] = useState("");
        const [description, setdescription] = useState("");

      const handleAgendarTurno = async () => {
            try {
              
              const response = await axios.post("http://localhost:3000/appoiment/agendar", {
                date,
                time,
                description
            });
         } catch (error) {
                console.error('Error al agendar turno:', error);
              
            }
            
             }
               
return(

        <>
        <div className='container-turns'>
            <div className='turns'>
                <div>
                    <form onSubmit={handleAgendarTurno} className='formTurnos'>
                        <div>
                            <h2>
                                Agenda tu Turno
                            </h2>
                        </div>
                        <div className="turnero">
                        <label htmlFor="">Fecha</label>
                            <input type="date"
                            value={date} 
                            onChange={(e) => setdate(e.target.value)}/>
                        
                        <label htmlFor="">Hora </label>
                            <input type="time" 
                            value={time}
                            onChange={(e) => settime(e.target.value)}/>
                        <label htmlFor="">Especialidad del Turno </label>
                            <input type="text" className="especialidad"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)} />
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
}
export default MisTurnos;