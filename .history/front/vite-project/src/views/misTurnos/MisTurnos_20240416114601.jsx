import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"

const MisTurnos = () => {
    const [userTurnos, setUserTurnos] = useState([]);
    const userId = useSelector(state => state.auth.userId)
    useEffect(() => {
        const fetchUserTurnos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/appoiment`);
                const userAppointments = response.data.filter(turno => turno.userId === userId);
                setUserTurnos(userAppointments);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        if (userId) {
            fetchUserTurnos();
        }
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
    {Array.isArray(userTurnos) && userTurnos.map((turno) => (
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
