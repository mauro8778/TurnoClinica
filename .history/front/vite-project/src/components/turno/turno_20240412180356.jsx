import "../turno/turno";

const Turno = ({time,date,description,status})=>{
    
  
    return(
       

        <>
        
        <div className="tarjeta">
            <div className="contenido">
                <h4>hora: {time}</h4>
                <h4>fecha: {date}</h4>
                <h4>descripcion: {description}</h4>
                <h4>estado: {status}</h4>
            </div>
        </div>
        
        </>
    )
}
export default Turno;