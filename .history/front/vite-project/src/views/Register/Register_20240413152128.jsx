import axios from "axios";
import { useEffect, useState } from "react";
import register from "../../components/register/register";
const Register=()=>{
    const [registers, setRegisters] = useState([]);

    useEffect(()=>{
      axios.post("http://localhost:3000/users/register")
      .then((res)=>setRegisters(res.data));
    },[]);
    
return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div className='conteiner'>
            {registers.map((turno) => { 
             return (<register
                    key={register.id}
                    name={register.name}
                    email={register.email}
                    nDni={register.nDni}
                    username={register.username}
                    password={register.password}
                    birthdate={register.birthdate}
                    />)
            })}

        </div>
        </>
    )




}
export default Register;