
import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
     <div className="navbar-container">

     <ul>
        <li><CustomButton><Login>Login</Login></CustomButton></li>
        <li>hola</li>
        <li>Contacto</li>
      </ul>
      <Register/>


    </div>
    
    </>)
}
export default NavBar;