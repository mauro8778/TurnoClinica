import NavBar from "../../components/NavBar/NavBar";
import Especialidades from "../../components/especialidades medicas/especialidades";


import "./home.css"

const Home = () => {
    return(
        
       <>
       
<div className="main-content">
    <div className="centered-container">
      <h1>Centro de Especialidades Medicas Osorio</h1>
    </div>
    <div className="conteiner-inicio">
    <Especialidades/>
    </div>
</div>
        <NavBar/>
       </>
    )

}
export default Home