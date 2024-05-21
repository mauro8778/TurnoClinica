export const SET_USER_APPOIMENT = 'SET_USER_APPOIMENT';

export const setUserAppointments = (appoiment) => {
  return {
    type: SET_USER_APPOIMENT,
    payload: appoiment
  };
};
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  };
};

export const loginUserSuccess = (userData) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userData
  };
};

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
};

export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());

    try {
      const response = await axios.post("http://localhost:3000/users/login", credentials);
      const userData = response.data;

      dispatch(loginUserSuccess(userData));
      navigate(`/home/${userData.id}`);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      dispatch(loginUserFailure(error));

      if (error.response && error.response.status === 400) {
        alert("Usuario inexistente");
      } else if (error.response && error.response.status === 401) {
        alert("Contraseña incorrecta");
      } else {
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde");
      }
    }
  };
};