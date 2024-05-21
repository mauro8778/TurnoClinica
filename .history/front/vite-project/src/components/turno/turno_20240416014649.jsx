import "../turno/turno.css";
import { useState } from "react";


const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState('activo'); 

  const cancelarTurno = () => {
    setStatus('cancelado');
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