export const SET_USER_APPOINTMENTS = 'SET_USER_APPOINTMENTS';

export const setUserAppointments = (appointment) => {
  return {
    type: SET_USER_APPOINTMENTS,
    payload: appointment
  };
};