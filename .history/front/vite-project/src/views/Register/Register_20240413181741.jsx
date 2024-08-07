
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
 
 
    return(
    <>
    <div className="tarjeta">
        < div className="contenido">
            <h1>Formulario de Registro</h1>
       
        
            <label htmlFor="">Nombre:
                <input type="text" 
                value={userData.name}
                name="name"
                placeholder="Colocar tu nombre"/>
            </label>
        
          
            <label htmlFor="">Email:
                <input type="text" 
                value={userData.email}
                name="email"
                placeholder="Colocar tu email"/>
            </label>
        
        
            <label htmlFor="">Numero de DNI:
                <input type="text"
                value={userData.nDni} />
            </label>
            
            
            <label htmlFor="">Fecha de Nacimiento:
                <input type="text" 
                value={userData.birthdate}/>
            </label>
            
            <label htmlFor="">Usuario:
                <input type="text"
                value={userData.username} />
            </label>
            
            <label htmlFor="">Contraseña:
                <input type="text" 
                value={userData.password}/>
            </label>
            
                <button>Registro</button>
            
        </div>

    </div>
    
    </>
 )
}
export default Register;