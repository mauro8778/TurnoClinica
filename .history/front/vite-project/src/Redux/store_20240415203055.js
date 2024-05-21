
import { createStore } from "react-redux""
import rootReducer from './reducers';

const initialState = {
  user: null,
  userAppointments: [],
  // Otros estados si es necesario
};

// Reducer principal que maneja el estado inicial
const rootReducer = (state = initialState, action) => {
  // Lógica del reducer aquí
};

const store = createStore(rootReducer); 

export default store;
export default store;