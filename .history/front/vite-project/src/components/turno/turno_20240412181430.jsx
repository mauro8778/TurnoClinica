import "../turno/turno.css";

const Turno = ({time,date,description,status})=>{
    
  
    return(
       

        <>
        
        <div className="tarjeta">
            <div className="contenido">
                <h4 className="animacion">Descripcion:{description}</h4>
                <h4 className="animacion">Hora:{time}</h4>
                <h4 className="animacion">Fecha:{date}</h4>
                <h4 className="estado">Estado:<span className="verde">{status}</span></h4>
            </div>
        </div>
        
        </>
    )
}
export default Turno;