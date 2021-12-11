import { createContext } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: any;
  currentUser: any;
  setCurrentUser: any;
}

const defaultContext = {
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => {},
  currentUser: null,
  setCurrentUser: (user: any) => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultContext);
