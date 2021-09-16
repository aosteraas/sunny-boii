import { createContext } from 'react';
import { IAuthContext, LogInFormData } from './types';

const stub = (): never => {
  throw new Error('cant use this outside context');
};

const defaultState = {
  isLoggedIn: false,
  logIn: stub,
};

export const AuthContext = createContext<IAuthContext>(defaultState);
