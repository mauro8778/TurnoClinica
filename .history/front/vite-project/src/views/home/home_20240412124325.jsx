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
    <div className="container">
      <div className="container-inicio">
        <Especialidades />
      </div>
    </div>
</div>
        <NavBar/>

        <section>
            <p>
            El Centro Medico de Especialidades Osorio fue fundado por el Dr. Carlos Osorio en el año 1980. 
            Desde entonces, Osorio es protagonista directo de la evolución del diagnóstico por imágenes en la Argentina.
            Abrió sus puertas como un pequeño consultorio ubicado en Laprida 1509, que pronto se extendió al edificio de la calle Arenales 2777-2751,
             hoy conocido como SEDE BARRIO NORTE. 
            En los años subsiguientes, se inauguraron dos sedes sumamente relevantes para el desarrollo del Centro ROSSI: SEDE ABASTO, en 1996; y SEDE MICROCENTRO, en 1999. 
            La primera está ubicada en Sánchez de Loria 117 (Imágenes de alta complejidad, planta de laboratorio (2015) y consultorios médicos y kinesiología.
             La segunda se la calle Corrientes 544 
            donde actualmente funcionan consultorios médicos y kinesiología.
                </p>
        </section>
       </>
    )

}
export default Home