export const SET_USER_APPOIMENT = 'SET_USER_APPOIMENT';

export const setUserAppointments = (appoiment) => {
  return {
    type: SET_USER_APPOIMENT,
    payload: appoiment
  };
};