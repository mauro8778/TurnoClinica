import { CustomButton } from "../button/customBottonStyled";
import Login from "../login/login";
import Register from "../register/register";
import styled from "styled-components"

const NavBar=()=>{

    return(
    <>
    <div>

    <Login/>
   <Register/>
   <CustomButton>Register</CustomButton>
   <CustomButton>Login</CustomButton>


    </div>
    
    </>)
}
const NavBar=styled.button`
background-color:grey;
}
`

export default NavBar;