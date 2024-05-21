import axios from "axios";
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

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

// Acción asincrónica para iniciar sesión
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());

    try {
      // Aquí realizarías la solicitud al servidor para iniciar sesión
      const response = await axios.post("http://localhost:3000/users/login", credentials);
      
      // Si la solicitud es exitosa, despacha la acción de éxito con los datos del usuario
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      // Si hay un error, despacha la acción de fallo con el mensaje de error
      dispatch(loginUserFailure(error.message));
    }
  };
};