import { LOGIN_USER } from './types';

export const loginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData
  };
};