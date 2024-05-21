import { useState } from 'react';
import './Register.css'; // Archivo de estilos para el formulario de registro

const Register = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nDni, setNDni] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
    // Por ejemplo, utilizando axios.post()
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