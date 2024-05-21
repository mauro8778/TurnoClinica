
import  "./NavBar.css";
import hospital from "../../assets/hospital.jpg"
import persona from "../../assets/persona.png"


const NavBar=()=>{

    return(
    <>
    
    <div className="navbar">
      <img src={hospital} alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <li>Home</li>
        <li>Mis Turnos </li>
        <li>About</li>
        <li>Contactos </li>
      </ul>
      <img src={persona} alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;