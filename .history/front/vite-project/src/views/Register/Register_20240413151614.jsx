import { useEffect, useState } from "react";

const Register=()=>{
    const [register,setRegister] = useState([]);

    useEffect(()=>{
      axios.post("http://localhost:3000/users/register")
      .then((res)=>setTurnos(res.data));
    },[]);
    
return(

        <>
        <p>
            estamos en mis turnos
        </p>

        <div className='conteiner'>
            {turnos.map((turno) => { 
             return (<Turno
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