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

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());

    try {
      const response = await axios.post("http://localhost:3000/users/loguin", credentials);
      
      
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
  };
};