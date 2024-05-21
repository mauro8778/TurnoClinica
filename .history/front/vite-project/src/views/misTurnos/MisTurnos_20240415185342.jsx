import { useEffect, useState } from 'react';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/appoiment")
      .then((res) => setTurnos(res.data))
      .catch(error => console.error('Error al obtener turnos:', error));
  }, []);

  const handleAgendarTurno = async (event) => {
    event.preventDefault();  try {
      const response = await axios.post("http://localhost:3000/appoiment/agendar", {
        date,
        time,
        description
      });
      setTurnos([...turnos, response.data]); /
      setDate("");
      setTime("");
      setDescription("");
    } catch (error) {
      setError('Error al agendar turno. Inténtalo de nuevo más tarde.'); /}
  };

  return (
    <>
      <div className='container-turns'>
        <div className='turns'>
          <div>
            <form onSubmit={handleAgendarTurno} className='formTurnos'>
              <div>
                <h2>Agenda tu Turno</h2>
              </div>
              <div className="turnero">
                <label htmlFor="">Fecha</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)} />
                <label htmlFor="">Hora</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)} />
                <label htmlFor="">Especialidad del Turno</label>
                <input
                  type="text"
                  className="especialidad"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" className="agendar">Agendar</button>
              </div>
            </form>
          </div>
        </div>
        <h1>Mis Turnos</h1>

        <div className='conteiners'>
          {turnos.map((turno) => {
            return (
              <Turno
                key={turno.id}
                date={turno.date}
                time={turno.time}
                description={turno.description}
                status={turno.status} />
            );
          })}
        </div>
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error si existe */}
      </div>
    </>
  );
};

export default MisTurnos;