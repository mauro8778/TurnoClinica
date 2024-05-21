import  { useState } from 'react';
import axios from 'axios';
import validarTurno,  { isDiaSemana, isHoraValida } from '../../helper/validateTurnos.js';

const CrearTurnos = ({ userId, setUserTurnos }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        description: '',
        status: 'active'
    });
    const [error, setError] = useState('');

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
                    setError('Los turnos solo pueden ser agendados de lunes a viernes, apartir de mañana');
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

    return (
        <div><div>
        <h1>Agenda tu turno</h1>
    </div>
            <form onSubmit={handleSubmit} className='formTurnos'>
                
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
                    <button type="submit" className='Agendar'>Agendar</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CrearTurnos;
