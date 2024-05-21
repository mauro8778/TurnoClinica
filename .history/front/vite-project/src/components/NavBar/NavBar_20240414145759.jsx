
import  "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import logo from "../../assets/logo.jpg"


const NavBar=()=>{

    return(
    <>
    
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <a href="/home">Home</a>
        <a href="/MisTurnos">Mis Turnos</a>
      </ul>
      <img src={logo} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;