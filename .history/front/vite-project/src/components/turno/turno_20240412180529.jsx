import "../turno/turno.css";

const Turno = ({time,date,description,status})=>{
    
  
    return(
       

        <>
        
        <div className="tarjeta">
            <div className="contenido">
                <h4>Descripcion:{description}</h4>
                <h4>Hora:{time}</h4>
                <h4>Fecha:{date}</h4>
                <h4>Estado:{status}</h4>
            </div>
        </div>
        
        </>
    )
}
export default Turno;