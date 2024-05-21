
import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";
import  "./NavBar.css";

const NavBar=()=>{

    return(
    <>
     <div className="navbar-container">
        <form action="">
            <div className="Conteiner">
                <label htmlFor="">Username</label>
                <input type="text" />
            </div>
            <div className="Conteiner">
                <label htmlFor="">Password</label>
                <input type="text" />
            </div>
        </form>
     <ul>
        <li><CustomButton><Login></Login></CustomButton></li>
        <li><CustomButton><Register></Register></CustomButton></li>
      </ul>
      


    </div>
    
    </>)
}
export default NavBar;