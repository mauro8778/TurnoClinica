
const Turno=({time,date,description,status})=>{

    return(

        <>
        
        <div>
                <h4>hora: {time}</h4>
                <h4>fecha: {date}</h4>
                <h4>descripcion:{description}</h4>
                <h4>estado: {status}</h4>
        </div>
        
        </>
    )
}
export default Turno;