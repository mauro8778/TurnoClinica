import { useState } from "react";
import axios from "axios"
import "./login.css";

const LoginForm = () => {
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
    try {
      const response = await axios.post("http://localhost:3000/users/loguin", credentials);
      if (response.status === 200) {
        alert("Inicio de sesión exitoso");
        
    } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde");
    }
  };

  return (
    <div className="card-container">
    <div className="card">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </div>
);
};

export default LoginForm;