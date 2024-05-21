
const isDiaSemana = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; 
  };
  
  
  const isHoraValida = (date) => {
    const hora = date.getHours();
    return hora >= 8 && hora < 17; 
  };
  
  const validarTurno = (fecha) => {
    try {
      const fechaTurno = new Date(fecha);
  
     
      if (!isDiaSemana(fechaTurno)) {
        throw new Error('Los turnos solo pueden ser agendados de lunes a viernes.');
      }
  
      
      if (!isHoraValida(fechaTurno)) {
        throw new Error('Los turnos solo pueden ser agendados entre las 8am y las 5pm.');
      }
  
      return true;
    } catch (error) {
      
      console.error('Error al validar turno:', error.message);
      return false;
    }
  };
  
export default validarTurno;