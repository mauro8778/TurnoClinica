
import  "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import logo from "../../assets/logo.jpg"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
const NavBar=()=>{
  const userId = useSelector(state => state.auth.userId)

    return(
    <>
    
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <Link className="li" to={`/home/${userId}`}>Home</Link>
        <br />
        <Link className="li" to={`/misTurnos/${userId}`}>Mis Turnos</Link>
        <Link className="link" to="/">
              Desloguearse
            </Link>
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;