import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Importa el reducer de autenticación

const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});

export default store;