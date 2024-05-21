
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
                <input type="text" />
            </label>
        
          
            <label htmlFor="">Email:
                <input type="text" />
            </label>
        
        
            <label htmlFor="">Numero de DNI:
                <input type="text" />
            </label>
            
            
            <label htmlFor="">Fecha de Nacimiento:
                <input type="text" />
            </label>
            
            <label htmlFor="">Usuario:
                <input type="text" />
            </label>
            
            <label htmlFor="">Contraseña:
                <input type="text" />
            </label>
            
                <button>Registro</button>
            
        </div>

    </div>
    
    </>
 )
}
export default Register;