import { useState } from 'react';
import "../Register/Register.css" 
import axios from 'axios';

const Register = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nDni, setNDni] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/users/register", {
          name,
          email,
          birthdate,
          nDni,
          username,
          password
        });
  
        // Manejar la respuesta del servidor aquí, por ejemplo, mostrar un mensaje de éxito o redireccionar a otra página
        console.log('Usuario creado con éxito:', response.data);
      } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al crear el usuario:', error);
      }
    };

  return (
    <div className="tarjeta">
      <div className="contenido">

        <h2>Registro</h2>

        <form onSubmit={handleSubmit}>

          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Fecha de Nacimiento:
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </label>
          <label>
            Número de DNI:
            <input type="text" value={nDni} onChange={(e) => setNDni(e.target.value)} />
          </label>
          <label>
            Nombre de usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;