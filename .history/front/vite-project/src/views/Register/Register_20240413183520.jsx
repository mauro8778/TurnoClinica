
import { useState } from "react"
import "../Register/Register.css"

const Register = () => {
 const [userData, setuserData] = useState({

    name:'',
    email:'',
    nDni:'',
    birthdate:'',
    username:'',
    password:''
 });
 const hundlerInputchance=()=>{

 };
 
    return(
    <>
    <div className="tarjeta">
        < div className="contenido">
            <h2>Formulario de Registro</h2>
       
        <form action="">
        <label htmlFor="name">Nombre:
                <input type="text" 
                value={userData.name}
                name="name"
                placeholder="Colocar tu nombre..."/>
            </label>
        
          
            <label htmlFor="email">Email:
                <input type="text" 
                value={userData.email}
                name="email"
                placeholder="Colocar tu email..."/>
            </label>
        
        
            <label htmlFor="nDni">Numero de DNI:
                <input type="text"
                value={userData.nDni} 
                name="nDni"
                placeholder="Colocar tu dni..."/>
            </label>
            
            
            <label htmlFor="birthdate">Fecha de Nacimiento:
                <input type="text" 
                value={userData.birthdate}
                    name="biirthdate"
                    placeholder="Colocar tu Fecha de Nacimiento..."/>
            </label>
            
            <label htmlFor="username">Usuario:
                <input type="text"
                value={userData.username}
                name="username"
                placeholder="Colocar tu Usuario..." />
            </label>
            
            <label htmlFor="password">Contraseña:
                <input type="password" 
                value={userData.password}
                name="password"
                placeholder="Colocar tu Contraseña..."/>
            </label>
            
                <button>Registro</button>
        </form>
           
            
        </div>

    </div>
    
    </>
 )
};
export default Register;