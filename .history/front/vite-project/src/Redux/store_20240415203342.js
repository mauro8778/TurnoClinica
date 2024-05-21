import{createStore} from "react-redux"
import rootReducer from './reducers';

const initialState = {
  user: null,
  userAppointments: [],
};

const rootReducer = (state = initialState, action) => {
};

const store = createStore(rootReducer); 

export default store;