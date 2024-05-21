import "../turno/turno.css";
import { useState } from "react";
import axios from "axios";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState('activo'); 

  
const cancelarTurno = () => {
  axios.put("http://localhost:3000/appoiment/cancelar")
      .then(response => {
          setStatus('cancelado');
      })
      .catch(error => {
          console.error('Error al cancelar turno:', error);
      });
};
  
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