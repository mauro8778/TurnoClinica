
import  "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import logo from "../../assets/logo.jpg"
import Link from "react-router-dom"

const NavBar=()=>{

    return(
    <>
    
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/misTurnos">Mis Turnos</Link>
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;