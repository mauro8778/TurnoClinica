import "../NavBar/NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import hospital from "../../assets/hospital.jpg";

const NavBar = () => {
  const userId = useSelector((state) => state.auth.userId);
  const userPhotoUrl = useSelector((state) => state.user.photoUrl); 
  return (
    <>
      <div className="navbar">
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
        {userPhotoUrl && <img src={userPhotoUrl} alt="Foto de perfil" className="right-image" />}
      
      </div>
    </>
  );
};

export default NavBar;
