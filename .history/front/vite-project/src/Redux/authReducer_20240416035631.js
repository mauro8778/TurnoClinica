import { LOGIN_USER_SUCCESS } from "./authActions";

const initialState = {
  userId: null,
  // Otros estados si es necesario
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userId: action.payload,
      };
    // Otros casos para manejar otras acciones si es necesario
    default:
      return state;
  }
};

export default authReducer;