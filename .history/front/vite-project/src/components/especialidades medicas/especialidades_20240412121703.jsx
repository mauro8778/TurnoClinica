import { CustomButton } from "../button/customBottonStyled";

const Especialidades=()=>{

    return(
        <>
        <ul className="especialidades-list">
      <li><CustomButton>Cardiología</CustomButton></li>
      <li><CustomButton>Nutricionista</CustomButton></li>
      <li><customButton>Psicología</customButton></li>
      <li><CustomButton>Traumatología</CustomButton></li>
      <li><CustomButton>Medico Clinico</CustomButton></li>
    </ul>
        </>
    )
}
export default Especialidades;