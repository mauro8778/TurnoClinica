
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const FETCH_USER_TURNOS_SUCCESS = 'FETCH_USER_TURNOS_SUCCESS';
import axios from "axios";


export const fetchUserTurnosSuccess = (turnos) => ({
    type: FETCH_USER_TURNOS_SUCCESS,
    payload: turnos
  });
export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});



export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());

    try {
      // Accede directamente al userId desde el objeto userData
      const userId = userData.id;

      // Despacha una acción para actualizar el estado con el userId
      dispatch(loginUserSuccess(userId));
    } catch (error) {
      dispatch(loginUserFailure("Error en la solicitud de inicio de sesión: " + error.message));
    }
  };
};