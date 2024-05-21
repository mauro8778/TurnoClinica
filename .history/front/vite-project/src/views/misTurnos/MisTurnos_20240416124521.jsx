import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Turno from "../../components/turno/turno.jsx"
import "./MisTurnos.css";
import axios from "axios"

const MisTurnos = () => {
    const [userTurnos, setUserTurnos] = useState([]);
    const userId = useSelector(state => state.auth.userId)
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        description: ''
    });

    useEffect(() => {
        const fetchUserTurnos = async () => {
            try {
                if (!userId) return;
        
                const response = await axios.get(`http://localhost:3000/appoiment`);
                console.log('Datos de la API:', response.data); 

                const filteredTurnos = response.data.filter(turno => {
                    return turno.user.id === userId;
                });
            
                console.log('Turnos filtrados:', filteredTurnos); 
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
        try {
            const response = await axios.post('http://localhost:3000/appoiment/agendar', {
                ...formData,
                userId: userId
            });
            console.log('Turno creado:', response.data);

        } catch (error) {
            console.error('Error creando turno:', error);
        }
    };
    console.log("turno",userTurnos)
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
                
    { userTurnos.map((turno) => (
        
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
