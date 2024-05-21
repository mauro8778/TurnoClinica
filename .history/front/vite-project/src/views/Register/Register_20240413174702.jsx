import { useState } from 'react';
import "../Register/Register.css" 

const Register = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nDni, setNDni] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="tarjeta">
      <div className="contenido">

        <h2>Registro</h2>

        <form >
    <label htmlFor="">Nombre:
        <input type="nombre" />
    </label> <label htmlFor="">Dni:
        <input type="nDni" />
    </label> <label htmlFor="">email:
        <input type="email" />
    </label> <label htmlFor="">Fecha de nacimiento:
        <input type="Birthdate" />
    </label> <label htmlFor="">Usuario:
        <input type="username" />
    </label> <label htmlFor="">Contraseña
        <input type="Password" />
    </label>
          
        </form>
      </div>
    </div>
  );
};

export default Register;