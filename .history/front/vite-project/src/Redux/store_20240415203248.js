import{createStore} from "react-redux"
import rootReducer from './reducers';

const initialState = {
  user: null,
  userAppointments: [],
};

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

const store = createStore(rootReducer); 

export default store;