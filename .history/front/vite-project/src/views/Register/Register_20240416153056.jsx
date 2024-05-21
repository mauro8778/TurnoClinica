import { useState, useEffect } from "react";
import "../Register/Register.css";
import { Validate } from "../../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    nDni: "",
    birthdate: "",
    username: "",
    password: "",
    photo: null // Agrega un estado para la foto del usuario
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    nDni: "",
    birthdate: "",
    username: "",
    password: "",
    photo: "" // Agrega un estado para los errores de la foto
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

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    setUserData({
      ...userData,
      photo: file // Actualiza el estado de la foto del usuario con el archivo seleccionado
    });
  };

  useEffect(() => {
    if (formSubmitted) {
      const currentErrors = Validate(userData);
      setErrors(currentErrors);

      const noErrors = Object.values(currentErrors).every(
        (error) => error === ""
      );

      if (noErrors) {
        // Crea un objeto FormData para enviar los datos del formulario incluida la foto
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("email", userData.email);
        formData.append("nDni", userData.nDni);
        formData.append("birthdate", userData.birthdate);
        formData.append("username", userData.username);
        formData.append("password", userData.password);
        formData.append("photo", userData.photo);

        axios
          .post("http://localhost:3000/users/register", formData)
          .then(() => {
            alert("Usuario creado con éxito");
            setFormSubmitted(false);
            setUserData({
              name: "",
              email: "",
              nDni: "",
              birthdate: "",
              username: "",
              password: "",
              photo: null // Reinicia el estado de la foto del usuario
            });
            setErrors({
              name: "",
              email: "",
              nDni: "",
              birthdate: "",
              username: "",
              password: "",
              photo: "" // Reinicia el estado de los errores de la foto
            });
            navigate("/");
          })
          .catch((error) => {
            console.error("Error al enviar los datos:", error);
          });
      }
    }
  }, [formSubmitted, userData, navigate]);
  

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
            <label htmlFor="photo">
  Foto de perfil:
  <input
    type="file"
    accept="image/*"
    onChange={handlePhotoChange}
    name="photo"
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
