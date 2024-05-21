import NavBar from "../../components/NavBar/NavBar";
import { CustomButton } from "../../components/button/customBottonStyled.jsx";


import "./home.css"

const Home = () => {
    return(
        
       <>
       
       <div className="main-content">
    <div className="centered-container">
      <h1>Centro de Especialidades Medicas Osorio</h1>
      <div className="conteiner-inicio">
      <ul className="horizontal-list">
          <li><CustomButton>Cardiologia</CustomButton></li>
          <li><CustomButton>Nutricionista</CustomButton></li>
          <li><CustomButton>Psicologia</CustomButton></li>
        </ul> 
        <ul className="horizontal-list">
          <li><CustomButton>Traumatologia</CustomButton></li>
          <li><CustomButton>Medico Clinico</CustomButton></li>
        </ul>
      </div>
    </div>
  </div>
        <NavBar/>
       </>
    )

}
export default Home