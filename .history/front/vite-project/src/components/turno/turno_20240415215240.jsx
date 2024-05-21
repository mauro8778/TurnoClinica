import "../turno/turno.css";
import { useState } from "react";
import axios from "axios";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState('activo'); 

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/appointments/user/${userId}`);
        setTurnos(response.data);
      } catch (error) {
        console.error('Error al obtener los turnos del usuario:', error);
      }
    };

    fetchTurnos();
  }, [userId]);
  
    return(
       

        <>
        
        <div className="tarjetas">
            <div className="contenidos">
                <h4 className="animacions">Descripcion:{description}</h4>
                <h4 className="animacions">Hora:{time}</h4>
                <h4 className="animacions">Fecha:{date}</h4>
                <h4 className="animacions">Estado: <span className={status === 'cancelado' ? 'rojo' : 'verde'}>{status}</span></h4>
                <button className="botons" onClick={cancelarTurno}>Cancelar</button>
            </div>
        </div>
        
        </>
    )
}
export default Turno;