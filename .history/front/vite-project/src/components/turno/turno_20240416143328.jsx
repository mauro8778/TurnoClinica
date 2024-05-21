import { useState } from "react";
import "../turno/turno.css";
import axios from "axios";

const Turno = ({ id, time, date, description, status, onTurnoCancelado }) => {
  const [cancelando, setCancelando] = useState(false);

  const cancelarTurno = async () => {
    try {
      console.log('ID del turno:', id);
      setCancelando(true);
      await axios.put(`http://localhost:3000/appoiment/cancelar/${id}`);
      onTurnoCancelado(id);  
    } catch (error) {
      console.log("error al cancelar el turno", error);
    } finally {
      setCancelando(false);
    }
  };

  return (
    <>
      <div className="tarjetas">
        <div className="contenidos">
          <h4 className="animacions">Descripcion: {description}</h4>
          <h4 className="animacions">Hora: {time}</h4>
          <h4 className="animacions">Fecha: {date}</h4>
          <h4 className="animacions">Estado: <span className={status === 'cancelado' ? 'rojo' : 'verde'}>{status}</span></h4>
          {status === 'activo' ? (
            <button className="botons" onClick={cancelarTurno} disabled={cancelando}>
              {cancelando ? 'Cancelando...' : 'Cancelar'}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Turno;


