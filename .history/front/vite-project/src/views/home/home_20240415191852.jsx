import { useState, useEffect } from "react";


import "./home.css"

const Home = () => {
    const { userId } = useParams(); // Obtener el ID del usuario de la URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`); // Hacer una solicitud para obtener los datos del usuario
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [userId]);
    return(
        
       <>
       <div>
        <h1>
            Centro Medico de Especialidades Osorio
        </h1>
       </div>
       <div className="container">
        <h3>Nuestras Especialidades Medicas</h3>
        <ul className="container-lu">
            <li className="container-li">Medico clínico</li>
            <li className="container-li">Nutricionista</li>
            <li className="container-li">Traumatología</li>
            <li className="container-li">Psicología </li>
            <li className="container-li">Cardiología</li>
            <li className="container-li">Obstetricia</li>
            <li className="container-li">Dermatología</li>
            <li className="container-li">Pediatría</li>
        </ul>
       </div>
       <div className="container-dos">
        <h2> Gran historia, excelente trayectoria</h2>
        <p>
       
El Centro de especialidades medicas Osorio fue fundado por el Dr. Carlos Ramon Osorio en el año 1980.
 Desde entonces, Osorio es protagonista directo de la evolución del diagnóstico por imágenes en la Argentina.
Abrió sus puertas como un pequeño consultorio ubicado en Laprida 1509, que pronto se extendió al edificio de la calle Arenales 2777-2751,
 hoy conocido como SEDE BARRIO NORTE. 
En los años subsiguientes, se inauguraron dos sedes sumamente relevantes para el desarrollo del Centro Osorio: SEDE ABASTO, en 1996; y SEDE MICROCENTRO, en 1999. 
La primera está ubicada en Sánchez de Loria 117 (Imágenes de alta complejidad, planta de laboratorio (2015) y consultorios médicos y kinesiología.
La segunda se la calle Corrientes 544 donde actualmente funcionan consultorios médicos y kinesiología.
En 2003, Osorio inauguró, en el barrio de BELGRANO, su cuarta sede, situada en Blanco Encalada 2557-2535. 
Finalmente en 2012 abrió sus puertas la SEDE de la calle ESMERALDA 141. 
En todas sus sedes Osorio cuenta con equipamiento y cuerpo médico y técnico de primer nivel. Nuestras sedes cuentan con Resonadores de última generación de 1,5 y 3T con software para todas las patologías,
 tomógrafos multicorte de 128 filas de detectores con software de baja dosis, radiología digital (incluyendo espinogramas y medición de miembros), ecógrafos de última generación con software especiales para Salud Fetal, elastosonografía, 
 MSK, doppler cardíaco y otros territorios vasculares. El área de la mujer cuenta con mamógrafos digitales con tomosíntesis, mesa de punción con tomosíntesis y ecografía mamaria, además de densitometría.
El Centro Osorio implementó el área de Chequeos Médicos que funciona en la sede de Esmeralda 141 y en Beruti 2853 cubriendo otro sector muy importante para la Salud.
En Junio de 2017 el Centro Osorio abre sus puertas en la sede San Isidro ubicada en la calle Dardo Rocha 3034, la primera en Zona Norte.
        </p>
       </div>
    </>
    )

}
export default Home