import{createStore} from "react-redux"
import rootReducer from './reducers';

const initialState = {
  user: null,
  userAppointments: [],
};

const store = createStore(rootReducer,initialState); 

export default store;