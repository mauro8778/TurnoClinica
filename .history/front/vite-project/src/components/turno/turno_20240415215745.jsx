import { useState } from "react";
import axios from "axios";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState("activo");
  const [turnos,setTurnos] =useState([]);

  const cancelarTurno = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/appointments/cancelar/${id}`);
      if (response.status === 200) {
        setStatus("cancelado");
        alert("El turno ha sido cancelado correctamente");
      } else {
        alert("Hubo un problema al cancelar el turno");
      }
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
      alert("Hubo un problema al cancelar el turno");
    }
  };

  return (
    <>
      <div className="tarjetas">
        <div className="contenidos">
          <h4 className="animacions">Descripción: {description}</h4>
          <h4 className="animacions">Hora: {time}</h4>
          <h4 className="animacions">Fecha: {date}</h4>
          <h4 className="animacions">Estado: <span className={status === 'cancelado' ? 'rojo' : 'verde'}>{status}</span></h4>
          {status === "activo" && (
            <button className="botons" onClick={cancelarTurno}>Cancelar</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Turno;