import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";
import  "./NavBar";

const NavBar=()=>{

    return(
    <>
    <div className="NavBar">

    <Login/>
   <Register/>
   <CustomButton>Register</CustomButton>
   <CustomButton>Login</CustomButton>


    </div>
    
    </>)
}
export default NavBar;