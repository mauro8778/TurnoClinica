
import { useState } from "react";
import "../Register/Register.css";
import { Validate } from "../../helper/validate";
import axios from "axios";

const Register = () => {
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
    setErrors(Validate(userData));

    if (
        Object.keys(errors).every((key) => errors[key] === "") &&
        Object.values(userData).every((value) => value !== "")
      ) {
        try {
         axios.post("http://localhost:3000/users/register", userData);
          alert("Usuario creado con éxito");
        } catch (error) {
          console.error("Error al enviar los datos:", error);
        }
      }
    };

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
                placeholder="Colocar tu nombre..."
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
                placeholder="Colocar tu email..."
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
                placeholder="Colocar tu dni..."
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
                placeholder="Colocar tu Fecha de Nacimiento..."
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
                placeholder="Colocar tu Usuario..."
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
                placeholder="Colocar tu Contraseña..."
                onChange={handleInputChange}
              />
            </label>
            {formSubmitted && <p className="error">{errors.password}</p>}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;