import CustomButton from "../button/customBottonStyled"
import Register from "../register/register";
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
     <div className="navbar-container">

     <ul>
        <li><CustomButton>Register</CustomButton></li>
        <li>hola</li>
        <li>Contacto</li>
      </ul>
      <Register/>


    </div>
    
    </>)
}
export default NavBar;