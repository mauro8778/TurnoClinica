import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Turno from '../../components/turno/turno.jsx';
import './MisTurnos.css';
import axios from 'axios';
import validarTurno, { isDiaSemana, isHoraValida } from '../../helper/validateTurnos.js';

const MisTurnos = () => {
    const userId = useSelector(state => state.auth.userId);
    const [userTurnos, setUserTurnos] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        description: '',
        status: 'active'
    });
    const [error, setError] = useState('');

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const fechaHoraTurno = new Date(formData.date + 'T' + formData.time);
        if (!validarTurno(fechaHoraTurno)) {
            
            if (!isHoraValida(fechaHoraTurno)) {
                setError('El horario del turno debe ser de 8am a 5pm.');
            } else {
                
                if (!isDiaSemana(fechaHoraTurno)) {
                    setError('Los turnos solo pueden ser agendados de lunes a viernes.');
                } else {
                    setError('Se podrán sacar turnos a partir de mañana y de lunes a viernes.');
                }
            }
            return; 
        }

        try {
            setError('');
            const response = await axios.post('http://localhost:3000/appoiment/agendar', {
                ...formData,
                userId: userId
            });
            console.log('Turno creado:', response.data);

            const newTurno = response.data;
            setUserTurnos(prevTurnos => [...prevTurnos, newTurno]);

            setFormData({
                date: '',
                time: '',
                description: '',
                status: 'active'
            });
        } catch (error) {
            console.error('Error creando turno:', error);
            setError('Error al crear el turno. Inténtalo de nuevo más tarde.');
        }
    };

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
                    <div>
                        <form onSubmit={handleSubmit} className='formTurnos'>
                            <div>
                                <h2>Agenda tu turno</h2>
                            </div>
                            <div className="turnero">
                                <label htmlFor="">Fecha:
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={handleInputChange}
                                        value={formData.date}
                                    />
                                </label>
                                <label htmlFor="">Hora:
                                    <input
                                        type="time"
                                        name="time"
                                        onChange={handleInputChange}
                                        value={formData.time}
                                    />
                                </label>
                                <label htmlFor="">Especialidad del Turno:
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <button type="submit">Agendar</button>
                            </div>
                        </form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
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


