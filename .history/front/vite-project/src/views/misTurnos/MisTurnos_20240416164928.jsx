import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Turno from '../../components/turno/turno.jsx';
import CrearTurnos from "'../../components/CrearTurno/CrearTurno.jsx'";
import './MisTurnos.css';
import axios from 'axios';



const MisTurnos = () => {
    const userId = useSelector(state => state.auth.userId);
    const [userTurnos, setUserTurnos] = useState([]);

    useEffect(() => {
        const fetchUserTurnos = async () => {
            try {
                if (!userId) return;

                const response = await axios.get(`http://localhost:3000/appoiment`);
                console.log('Datos de la API:', response.data);

                const filteredTurnos = response.data.filter(turno => {
                    return turno.user.id === userId;
                });

                setUserTurnos(filteredTurnos);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchUserTurnos();
    }, [userId]);

    const handleTurnoCancelado = (id) => {
        setUserTurnos(prevTurnos =>
            prevTurnos.map(turno => {
                if (turno.id === id) {
                    return { ...turno, status: 'cancelado' };
                }
                return turno;
            })
        );
    };

    return (
        <>
            <div className='container-turns'>
                <div className='turns'>
                    <CrearTurnos userId={userId} setUserTurnos={setUserTurnos} />
                </div>
                <h1>Mis Turnos</h1>

                <div className='containers'>
                    {userTurnos.map((turno) => (
                        <Turno
                            key={turno.id}
                            id={turno.id}
                            date={turno.date}
                            time={turno.time}
                            description={turno.description}
                            status={turno.status}
                            onTurnoCancelado={handleTurnoCancelado}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MisTurnos;



