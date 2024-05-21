
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
    
    <div className="navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sgx0RsRARhx0uD9gK1ZqLOsq0CR2KuHa9osXJuzt8w&s" alt="Imagen 1" className="left-image" />
      <ul className="nav-list">
        <li>Home</li>
        <li>Mis Turnos </li>
        <li>About</li>
        <li>Contactos </li>
      </ul>
      <img src="imagen2.jpg" alt="Imagen 2" className="right-image" />
    </div>

    
    </>
    )
}
export default NavBar;