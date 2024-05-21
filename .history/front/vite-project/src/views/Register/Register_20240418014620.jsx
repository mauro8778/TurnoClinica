
import { useState, useEffect } from "react";
import "../Register/Register.css";
import { Validate } from "../../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate= useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    nDni: "",
    birthdate: "",
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    nDni: "",
    birthdate: "",
    username: "",
    password: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    
  };

  useEffect(() => {
    if (formSubmitted) {
      const currentErrors = Validate(userData);
      setErrors(currentErrors);

      const noErrors = Object.values(currentErrors).every(
        (error) => error === ""
      );

      if (noErrors) {
        axios
          .post("http://localhost:3000/users/register", userData)
          .then(() => {
            alert("usuario creado con exito, recibira un correo con las credenciales");
            setFormSubmitted(false);
            setUserData({
              name: "",
              email: "",
              nDni: "",
              birthdate: "",
              username: "",
              password: ""
            });
            setErrors({
              name: "",
              email: "",
              nDni: "",
              birthdate: "",
              username: "",
              password: ""
            });
            navigate("/");
          })
          .catch((error) => {
            console.error("Error al enviar los datos:", error);
          });
      }
    }
  }, [formSubmitted, userData]);

  return (
    <>
      <div className="tarjeta">
        <div className="contenido">
          <h2>Formulario de Registro</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">
              Nombre:
              <input
                type="text"
                value={userData.name}
                name="name"
                placeholder="Colocar su nombre..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.name}</p>}

            <label htmlFor="email">
              Email:
              <input
                type="text"
                value={userData.email}
                name="email"
                placeholder="Colocar su email..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.email}</p>}

            <label htmlFor="nDni">
              Numero de DNI:
              <input
                type="text"
                value={userData.nDni}
                name="nDni"
                placeholder="Colocar su dni..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.nDni}</p>}

            <label htmlFor="birthdate">
              Fecha de Nacimiento:
              <input
                type="date"
                value={userData.birthdate}
                name="birthdate"
                placeholder="Colocar  Fecha de Nacimiento..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.birthdate}</p>}

            <label htmlFor="username">
              Usuario:
              <input
                type="text"
                value={userData.username}
                name="username"
                placeholder="Colocar su Usuario..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.username}</p>}

            <label htmlFor="password">
              Contraseña:
              <input
                type="password"
                value={userData.password}
                name="password"
                placeholder="Colocar su Contraseña..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.password}</p>}

            <button type="submit">Enviar</button>
            
            
  
         
          </form>
          <button className="but"><Link to="/" >Volver</Link></button>
        </div>
      </div>
    </>
  );
};

export default Register;
