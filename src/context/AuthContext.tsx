import { createContext } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: any;
  currentUser: any;
  setCurrentUser: any;
  loadingContext?: boolean;
  setLoadingContext?: any;
}

const defaultContext = {
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => {},
  currentUser: null,
  setCurrentUser: (user: any) => {},
  loadingContext: false,
  setLoadingContext: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultContext);
