import { CustomButton } from "../button/customBottonStyled";

const Especialidades=()=>{

    return(
        <>
        <div>

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
        </>
    )
}
export default Especialidades;