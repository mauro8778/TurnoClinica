import NavBar from "../../components/NavBar/NavBar"
import Inicio from "../../components/inicio/inicio"
import "./home.css"

const Home = () => {
    return(
        
       <>
       
       <div className="Contenier">
        <h1>Centro de Especialidades Medicas Osorio</h1>
       </div>
       <div className="Conteiner-Inicio">
        <Inicio/>
       </div>
        <NavBar/>
       </>
    )

}
export default Home