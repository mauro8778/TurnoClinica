
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
        <link className="li" href="/home">Home</link>
        <br />
        <link className="li" href="/MisTurnos">Mis Turnos</link>
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;