const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'SET_USER_APPOINTMENTS':
      return {
        ...state,
        userAppointments: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;