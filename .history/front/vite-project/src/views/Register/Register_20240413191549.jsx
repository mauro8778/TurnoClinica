
import { useState } from "react"
import "../Register/Register.css"
import { Validate } from "../../helper/validate";

const Register = () => {
 const [userData, setuserData] = useState({

    name:'',
    email:'',
    nDni:'',
    birthdate:'',
    username:'',
    password:''
 });
 const[errors,seterrors]=useState({

    name:"name is required",
    email:"email is required",
    nDni: "dni is required",
    birthdate: "fecha de nacimiento is required",
    username:"usuario is required",
    password:"contraseña is required"

 });

 const hundlerInputchance=(event)=>{
const{name, value}=event.target

setuserData({
    ...userData,
    [name]:value
})
const errors = Validate(userData);
seterrors(errors);

 };
 const haundlerOnSubmit=(event)=>{
    event.preventDefault()
    alert("usuario creado con exito")
 }
 
    return(
    <>
    <div className="tarjeta" >
        < div className="contenido">
            <h2>Formulario de Registro</h2>
       
        < onSubmit={haundlerOnSubmit}>
        <label htmlFor="name">Nombre:
                <input type="text" 
                value={userData.name}
                name="name"
                placeholder="Colocar tu nombre..."
                onChange={hundlerInputchance}/>
            </label>
           {errors.name && <p style={{color:"red"}}> {errors.name} </p> }
        
          
            <label htmlFor="email">Email:
                <input type="text" 
                value={userData.email}
                name="email"
                placeholder="Colocar tu email..."
            onChange={hundlerInputchance}
                
                />
            </label>
        
        
            <label htmlFor="nDni">Numero de DNI:
                <input type="text"
                value={userData.nDni} 
                name="nDni"
                placeholder="Colocar tu dni..."
                onChange={hundlerInputchance}/>
            </label>
            
            
            <label htmlFor="birthdate">Fecha de Nacimiento:
                <input type="text" 
                value={userData.birthdate}
                    name="birthdate"
                    placeholder="Colocar tu Fecha de Nacimiento..."
                    onChange={hundlerInputchance}/>
            </label>
            
            <label htmlFor="username">Usuario:
                <input type="text"
                value={userData.username}
                name="username"
                placeholder="Colocar tu Usuario..."
                onChange={hundlerInputchance} />
            </label>
            
            <label htmlFor="password">Contraseña:
                <input type="password" 
                value={userData.password}
                name="password"
                placeholder="Colocar tu Contraseña..."
                onChange={hundlerInputchance}/>
            </label>
            
                <button>Registro</button>
        </form>
           
            
        </div>

    </div>
    
    </>
 )
};
export default Register;