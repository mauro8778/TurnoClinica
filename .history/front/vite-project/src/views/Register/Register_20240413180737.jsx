
import "../Register/Register.css"

const Register = () => {
 return(
    <>
    <div className="tarjeta">
        <div className="contenido">
            <h1>Formulario de Registro</h1>
       
        <div>
            <label htmlFor="">Nombre:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Email:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Numero de DNI:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Fecha de Nacimiento:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Usuario:
                <input type="text" />
            </label>
            </div>
            <div>
            <label htmlFor="">Contraseña:
                <input type="text" />
            </label>
            </div>
        </div>

    </div>
    
    </>
 )
}
export default Register;