import "../turno/turno.css";
import { useState } from "react";
import axios from "axios";


const Turno = ({ id,time, date, description }) => {
  const [status, setStatus] = useState('activo'); 

  const cancelarTurno =async () => {
    try{
      await axios.put('http://localhost:3000/appoiment/cancelar/${id}')
      setStatus('cancelado')
    } catch(error){

      console.log("error al cancelar el turno",error)
    }
  
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