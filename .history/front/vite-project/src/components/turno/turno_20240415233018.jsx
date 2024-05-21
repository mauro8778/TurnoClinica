import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState("activo");
  const userId = useSelector(state => state.auth.user?.id);
  const [turno, setTurno] = useState(null);
  
  useEffect(() => {
    const fetchTurno = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/appoiment/${userId}`);
        setTurno(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    if (userId && !turno) {
      fetchTurno();
    }
  }, [userId, turno]);

  const cancelarTurno = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/appoiment/cancelar/${id}`);
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

  if (!turno) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tarjetas">
      <div className="contenidos">
        <h4 className="animacions">Descripción: {turno.description}</h4>
        <h4 className="animacions">Hora: {turno.time}</h4>
        <h4 className="animacions">Fecha: {turno.date}</h4>
        <h4 className="animacions">Estado: <span className={status === 'cancelado' ? 'rojo' : 'verde'}>{status}</span></h4>
        {status === "activo" && (
          <button className="botons" onClick={() => cancelarTurno(turno.id)}>Cancelar</button>
        )}
      </div>
    </div>
  );
};

export default Turno;