
import React from 'react';
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado del store
import { Link } from 'react-router-dom';
import hospital from '../../assets/hospital.jpg';
import logo from '../../assets/logo.jpg';
import './NavBar.css';

const NavBar = () => {
 
  const user = useSelector(state => state.auth.user);

  return (
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        {/* Verifica si el usuario está logueado para mostrar el enlace */}
        {user ? (
          <>
            <Link className="li" to="/home">Home</Link>
            <br />
            <Link className="li" to="/MisTurnos">Mis Turnos</Link>
          </>
        ) : (
          // Si el usuario no está logueado, muestra el enlace de inicio de sesión
          <Link className="li" to="/login">Iniciar sesión</Link>
        )}
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>
  );
};

export default NavBar;
