import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios";
import { setUserAppointments } from '../../actions/appointmentsActions'; // Asegúrate de tener esta acción creada

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user); // Selector para obtener el estado del usuario autenticado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      // Si no hay usuario autenticado, puedes redirigir al usuario a la página de inicio
      // o deshabilitar el botón de "Mis Turnos"
      // Ejemplo de redirección:
      // navigate('/home');
      setLoading(false);
      return;
    }

    const fetchUserAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:3000appoiment/${user.id}`);
        dispatch(setUserAppointments(response.data)); // Actualiza el estado global con los turnos del usuario
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los turnos del usuario:', error);
        setLoading(false);
      }
    };

    fetchUserAppointments();

  }, [user, dispatch]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='container-turns'>
      <div className='turns'>
        <div>
          <form action="" className='formTurnos'>
            <div>
              <h2>Agenda tu Turno</h2>
            </div>
            <div className="turnero">
              <label htmlFor="">Fecha</label>
              <input type="date" />

              <label htmlFor="">Hora</label>
              <input type="time" name="" id="" />

              <label htmlFor="">Especialidad del Turno</label>
              <input type="text" className="especialidad" />
              <button className="agendar">Agendar</button>
            </div>
          </form>
        </div>
      </div>
      <h1>Mis Turnos</h1>
      <div className='conteiners'>
        {user && user.appointments && user.appointments.length > 0 ? (
          user.appointments.map((turno) => (
            <Turno
              key={turno.id}
              date={turno.date}
              time={turno.time}
              description={turno.description}
              status={turno.status}
            />
          ))
        ) : (
          <p>No hay turnos agendados para este usuario.</p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;
