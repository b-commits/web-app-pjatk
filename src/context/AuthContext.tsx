import { createContext } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: any;
}

const defaultContext = {
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultContext);
