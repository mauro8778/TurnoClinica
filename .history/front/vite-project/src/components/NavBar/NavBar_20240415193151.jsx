
import  "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import logo from "../../assets/logo.jpg"
import {Link, useNavigate} from "react-router-dom"
const NavBar=(userId)=>{
  const navigate= useNavigate();
  navigate(`/home/${userId}`);
    return(
    <>
    
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <Link className="li" to={`/home/${userId}`}>Home</Link>
        <br />
        <Link className="li" to="/MisTurnos">Mis Turnos</Link>
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;