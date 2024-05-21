import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
     <div className="navbar-container">

     <ul>
        <li>Inicio</li>
        <li>Acerca</li>
        <li>Contacto</li>
      </ul>


    </div>
    
    </>)
}
export default NavBar;