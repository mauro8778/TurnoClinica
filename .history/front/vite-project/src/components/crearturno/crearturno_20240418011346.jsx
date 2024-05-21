import { useState } from 'react';
import axios from 'axios';
import validarTurno,  { isDiaSemana, isHoraValida } from '../../helper/validateTurnos.js';

const CrearTurnos = ({ userId, setUserTurnos }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '08:00', 
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

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 16; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                options.push(<option key={time} value={time}>{time}</option>);
            }
        }
        return options;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const fechaHoraTurno = new Date(formData.date + 'T' + formData.time);
        if (!validarTurno(fechaHoraTurno)) {
            if (!isHoraValida(fechaHoraTurno)) {
                setError('El horario del turno debe ser de 8hs a 17hs.');
            } else {
                if (!isDiaSemana(fechaHoraTurno)) {
                    setError('Los turnos solo pueden ser agendados de lunes a viernes, a partir de mañana');
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
                time: '08:00', 
                  description: '',
                status: 'active'
            });
        } catch (error) {
            console.error('Error creando turno:', error);
            setError('Error al crear el turno. Inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div>
            <h1>Agenda tu Turno</h1>
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
                        <select
                            name="time"
                            onChange={handleInputChange}
                            value={formData.time}
                        >
                            {generateTimeOptions()}
                        </select>
                    </label>
                  
<label htmlFor="description">Especialidad del Turno:</label>
<select
  name="description"
  value={formData.description}
  onChange={handleInputChange}
>
  <option value="">Seleccione una especialidad</option>
  <option value="Cardiología">Cardiología</option>
  <option value="Dermatología">Nutricionista</option>
  <option value="Gastroenterología">Medico Clínico</option>
  <option value="Neurología">Psicoloía</option>
  <option value="Oftalmología">Obstetricia</option>
  <option value="Pediatría">Pediatría</option>
  <option value="Psiquiatría">Dermatoloía</option>
  <option value="Traumatología">Traumatología</option>
</select>
                    <button type="submit" className='Agendar'>Agendar</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CrearTurnos;
