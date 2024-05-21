import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"

const MisTurnos=()=>{
const [turnos, setTurnos] = useState([]);

useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/appoiment');
        setTurnos(response.data); // Establecer el valor del estado con los turnos recibidos
      } catch (error) {
        console.error('Error fetching appointment data: ', error);
      }
    };

    fetchTurnos();
  }, []);

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