import CustomButton from "../button/customBottonStyled"
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
     <div className="navbar-container">

     <ul>
        <li><CustomButton>Register</CustomButton></li>
        <li>Acerca</li>
        <li>Contacto</li>
      </ul>


    </div>
    
    </>)
}
export default NavBar;