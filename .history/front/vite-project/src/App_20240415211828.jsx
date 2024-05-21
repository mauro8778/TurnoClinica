
import { useState } from "react";
import { useDispatch } from 'react-redux'; // Importa useDispatch
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./Redux/authActions";
const LoginForm = () => {
  const dispatch = useDispatch(); // Inicializa useDispatch
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!credentials.username && !credentials.password) {
      setError("Faltan rellenar los campos de usuario y contraseña");
      return;
    }
    if (!credentials.username) {
      setError("Falta colocar el nombre de usuario");
      return;
    }
    if (!credentials.password) {
      setError("Falta colocar la contraseña");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/users/login", credentials);
      if (response.status === 200) {
        const userData = response.data;
        dispatch(loginUser(userData)); // Despacha la acción para guardar el usuario en el store
        navigate(`/home/${userData.id}`);
        alert("Inicio de sesión exitoso");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Usuario inexistente");
      } else if (error.response && error.response.status === 401) {
        setError("Contraseña incorrecta");
      } else {
        setError("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde");
      }
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="left-column">
          <h2 className="centered">Bienvenido al Centro Médico Osorio</h2>
        </div>
        <div className="right-column">
          <h2 className="centered">Iniciar sesión</h2>
          <form onSubmit={handleFormSubmit} className="form-container">
            <div className="input-container">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="Botones">
              {error && <p className="error">{error}</p>}
              <button type="submit" className="button-container">Iniciar sesión</button>
              <Link to="/register" className="Links">Registrarse...</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;