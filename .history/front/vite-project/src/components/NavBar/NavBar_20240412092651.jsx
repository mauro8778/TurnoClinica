import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";

const NavBar=()=>{

    return(
    <>
    <div>

    <Login/>
   <Register/>
   <CustomButton>Login</CustomButton>

    </div>
    
    </>)
}

export default NavBar;