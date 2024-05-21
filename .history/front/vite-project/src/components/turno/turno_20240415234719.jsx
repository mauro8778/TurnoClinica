import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const userId = useSelector(state => state.auth.user?.id);
    const history = useHistory(); 

    useEffect(() => {
      const fetchUserTurnos = async () => {
        if (!userId) return; // Salir si userId es null o undefined
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:3000/appoiment/${userId}`); 
          setTurnos(response.data);
          setLoading(false);
        } catch (error) {
          setError('Error fetching appointments: ' + error.message);
          setLoading(false);
        }
      };
  
      fetchUserTurnos();
    }, [userId]);
  
    useEffect(() => {
      // Redirigir al usuario a la página de sus turnos después de cargar los turnos
      if (turnos.length > 0) {
        history.push(`/MisTurnos/${userId}`);
      }
    }, [turnos, userId, history]);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
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