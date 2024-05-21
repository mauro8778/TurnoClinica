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
      <>
        <div className='container-turns'>
          <div className='turns'>
            <div>
              <form action="" className='formTurnos'>
                <div>
                  <h2>Agenda tu turno</h2>
                </div>
                <div className="turnero">
                  <label htmlFor="">Fecha:
                    <input type="date" />
                  </label>
                  <label htmlFor="">Hora:
                    <input type="time" name="" id="" />
                  </label>
                  <label htmlFor="">Especialidad del Turno:
                    <input type="text" />
                  </label>
                  <button>Agendar</button>
                </div>
              </form>
            </div>
          </div>
          <h1>Mis Turnos</h1>
  
          <div className='containers'>
            {turnos.map((turno) => (
              <Turno
                key={turno.id}
                date={turno.date}
                time={turno.time}
                description={turno.description}
                status={turno.status}
              />
            ))}
          </div>
        </div>
      </>
    );
};

export default MisTurnos;
