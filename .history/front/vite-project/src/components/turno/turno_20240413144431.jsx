import "../turno/turno.css";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState('activo'); 

  const cancelarTurno = () => {
    setStatus('cancelado');
  };
  
    return(
       

        <>
        
        <div className="tarjeta">
            <div className="contenido">
                <h4 className="animacion">Descripcion:{description}</h4>
                <h4 className="animacion">Hora:{time}</h4>
                <h4 className="animacion">Fecha:{date}</h4>
                <h4 className="animacion">Estado: <span className={status === 'cancelado' ? 'rojo' : 'verde'}>{status}</span></h4>
                <button className="boton" onClick={cancelarTurno}>Cancelar</button>
            </div>
        </div>
        
        </>
    )
}
export default Turno;