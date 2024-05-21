import "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import logo from "../../assets/logo.jpg"


const NavBar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userId = useSelector(state => state.auth.user?.id);
  console.log("userId:", userId);

  return (
    <>
      <div className="navbar">
        <img src={hospital} alt="Imagen 1" className="left-image" />
        <ul className="nav-list">
        {isAuthenticated && <Link className="li" to={`/home/${userId}`}>Home</Link>}
          <br />
          {isAuthenticated && <Link className="li" to={`/misTurnos/${userId}`}>Mis Turnos</Link>}
        </ul>
        <img src={logo} alt="Imagen 2" className="right-image" />
      </div>
    </>
  )
}

export default NavBar;