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