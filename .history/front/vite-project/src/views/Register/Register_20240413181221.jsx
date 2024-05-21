
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
        < className="contenido">
            <h1>Formulario de Registro</h1>
       
        
            <label htmlFor="">Nombre:
                <input type="text" />
            </label>
        
          
            <label htmlFor="">Email:
                <input type="text" />
            </label>
        
            <div>
            <label htmlFor="">Numero de DNI:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Fecha de Nacimiento:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Usuario:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Contraseña:
                <input type="text" />
            </label>
            </div>
            <div>
                <button>Registro</button>
            </div>
        </div>

    </div>
    
    </>
 )
}
export default Register;