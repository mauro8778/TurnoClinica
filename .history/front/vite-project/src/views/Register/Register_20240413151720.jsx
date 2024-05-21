import axios from "axios";
import { useEffect, useState } from "react";

const Register=()=>{
    const [registers,setRegister] = useState([]);

    useEffect(()=>{
      axios.post("http://localhost:3000/users/register")
      .then((res)=>setRegister(res.data));
    },[]);
    
return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div className='conteiner'>
            {register.map((turno) => { 
             return (<register
                    key={turno.id}
                    date={turno.date}
                    time={turno.time}
                    description={turno.description}
                    status={turno.status}
                    />)
            })}

        </div>
        </>
    )




}
export default Register;