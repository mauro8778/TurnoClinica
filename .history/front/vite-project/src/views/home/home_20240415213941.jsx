import "./home.css"
import { useSelector } from 'react-redux';

const Home = () => {
    
    const userId = useSelector(state => state.auth.user.id);

    
    const isLoggedIn = !!userId; 
    
    return isLoggedIn && (
        <>
            <div>
                <h1>Centro Medico de Especialidades Osorio</h1>
            </div>
            <div className="container">
                <h3>Nuestras Especialidades Medicas</h3>
                <ul className="container-lu">
                    <li className="container-li">Medico clínico</li>
                    <li className="container-li">Nutricionista</li>
                    <li className="container-li">Traumatología</li>
                    <li className="container-li">Psicología</li>
                    <li className="container-li">Cardiología</li>
                    <li className="container-li">Obstetricia</li>
                    <li className="container-li">Dermatología</li>
                    <li className="container-li">Pediatría</li>
                </ul>
            </div>
            <div className="container-dos">
                <h2>Gran historia, excelente trayectoria</h2>
                <p>
                    El Centro de especialidades medicas Osorio fue fundado por el Dr. Carlos Ramon Osorio en el año 1980.
                    ...
                    // Resto del contenido del componente Home
                </p>
            </div>
        </>
    );
};

export default Home;