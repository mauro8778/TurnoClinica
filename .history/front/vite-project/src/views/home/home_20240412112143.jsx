import NavBar from "../../components/NavBar/NavBar";


import "./home.css"

const Home = () => {
    return(
        
       <>
       
       <div className="Contenier">
        <h1>Centro de Especialidades Medicas Osorio</h1>
       </div>
       <div className="Conteiner-Inicio">
        <ul>
            <li>Cardiologia</li>
            <li>Nutricionista</li>
            <li>Psicologia</li>
            <li>Traumatologia</li>
            <li>Medico Clinico</li>
        </ul>

       </div>
        <NavBar/>
       </>
    )

}
export default Home