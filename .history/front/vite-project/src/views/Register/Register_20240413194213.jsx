
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

    name:"Name is Required",
    email:"Email is Required",
    nDni: "Dni is Required",
    birthdate: "Fecha de Nacimiento is Required",
    username:"Usuario is required",
    password:"Contraseña is Required"

 });

 const hundlerInputchance=(event)=>{
const {name, value} = event.target

setuserData({
    ...userData,
    [name]:value
})
seterrors(Validate(userData));

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
       
        < form onSubmit = {haundlerOnSubmit} >
        <label htmlFor="name">Nombre:
                <input type="text" 
                value={userData.name}
                name="name"
                placeholder="Colocar tu nombre..."
                onChange={hundlerInputchance}/>
            </label>
          
        
          
            <label htmlFor="email">Email:
                <input type="text" 
                value={userData.email}
                name="email"
                placeholder="Colocar tu email..."
            onChange={hundlerInputchance}
                
                />
            </label>
            {errors.email && <p style={{color:"red"}}> {errors.email} </p> }
        
        
            <label htmlFor="nDni">Numero de DNI:
                <input type="text"
                value={userData.nDni} 
                name="nDni"
                placeholder="Colocar tu dni..."
                onChange={hundlerInputchance}/>
            </label>
            {errors.nDni && <p style={{color:"red"}}> {errors.nDni} </p> }

            
            
            <label htmlFor="birthdate">Fecha de Nacimiento:
                <input type="date" 
                value={userData.birthdate}
                    name="birthdate"
                    placeholder="Colocar tu Fecha de Nacimiento..."
                    onChange={hundlerInputchance}/>
            </label>
            {errors.birthdate && <p style={{color:"red"}}> {errors.birthdate} </p> }

            
            <label htmlFor="username">Usuario:
                <input type="text"
                value={userData.username}
                name="username"
                placeholder="Colocar tu Usuario..."
                onChange={hundlerInputchance} />
            </label>
            {errors.username && <p style={{color:"red"}}> {errors.username} </p> }
            
            
            <label htmlFor="password">Contraseña:
                <input type="password" 
                value={userData.password}
                name="password"
                placeholder="Colocar tu Contraseña..."
                onChange={hundlerInputchance}/>
            </label>
            {errors.password && <p style={{color:"red"}}> {errors.password} </p> }
                
                <button>Registro</button>
        </form>
           
            
        </div>

    </div>
    
    </>
 )
};
export default Register;