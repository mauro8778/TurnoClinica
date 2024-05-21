import "../turno/turno.css";

const Turno = ({ time, date, description }) => {
  const [status, setStatus] = useState('activo'); // Estado inicial del status

  const cancelarTurno = () => {
    setStatus('cancelado'); // Cambiar el estado a "cancelado" cuando se hace clic en el botón
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