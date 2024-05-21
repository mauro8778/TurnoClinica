
import "../NavBar/NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const userId = useSelector((state) => state.auth.userId);
  const userPhotoUrl = useSelector((state) => state.user.photoUrl); // Asegúrate de que esta es la forma en que accedes a la URL de la foto del usuario

  return (
    <>
      <div className="navbar">
        {/* Muestra la foto del usuario si está disponible */}
        {userPhotoUrl ? (
          <img src={userPhotoUrl} alt="Foto de perfil" className="left-image" />
        ) : (
          <img src={hospital} alt="Imagen 1" className="left-image" />
        )}

        <ul className="nav-list">
          <Link className="li" to={`/home/${userId}`}>
            Home
          </Link>
          <br />
          <Link className="li" to={`/misTurnos/${userId}`}>
            Mis Turnos
          </Link>
          <Link className="li" to="/">
            Cerrar Sesión
          </Link>
        </ul>

        {}
        <img src={logo} alt="Imagen 2" className="right-image" />
      </div>
    </>
  );
};

export default NavBar;