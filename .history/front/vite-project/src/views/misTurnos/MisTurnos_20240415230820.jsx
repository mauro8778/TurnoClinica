import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"
import { useSelector } from 'react-redux';

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const userId = useSelector(state => state.auth.user?.id);

  useEffect(() => {
    axios.get(`http://localhost:3000/appoiment/users/${userId}`)
      .then((res) => setTurnos(res.data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, [userId]);

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
