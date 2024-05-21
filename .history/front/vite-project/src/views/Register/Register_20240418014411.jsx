
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
          <form onSubmit={handleFormSubmit} className="formRegistro">
            <div className="inputContainer">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                value={userData.name}
                name="name"
                placeholder="Colocar su nombre..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.name}</p>}
            </div>
  
            <div className="inputContainer">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                value={userData.email}
                name="email"
                placeholder="Colocar su email..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.email}</p>}
            </div>
  
            <div className="inputContainer">
              <label htmlFor="nDni">Numero de DNI:</label>
              <input
                type="text"
                value={userData.nDni}
                name="nDni"
                placeholder="Colocar su dni..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.nDni}</p>}
            </div>
  
            <div className="inputContainer">
              <label htmlFor="birthdate">Fecha de Nacimiento:</label>
              <input
                type="date"
                value={userData.birthdate}
                name="birthdate"
                placeholder="Colocar su Fecha de Nacimiento..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.birthdate}</p>}
            </div>
  
            <div className="inputContainer">
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                value={userData.username}
                name="username"
                placeholder="Colocar su Usuario..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.username}</p>}
            </div>
  
            <div className="inputContainer">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                value={userData.password}
                name="password"
                placeholder="Colocar su Contraseña..."
                onChange={handleInputChange}
              />
              {formSubmitted && <p className="error">{errors.password}</p>}
            </div>
  
            <div className="buttonRow">
              <button type="submit">Enviar</button>
            </div>
          </form>
          
      <div className="buttonRow">
        <button className="volverButton"><Link to="/">Volver</Link></button>
      </div>
        </div>
      </div>
    </>
  );
};

export default Register;
