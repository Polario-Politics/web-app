import { createContext, useContext } from 'react';

import { initialUser } from '../../utils/constants';

import * as Types from './types';

const AuthContext = createContext<Types.AuthContextProps>({
  isAuthenticated: false,
  user: initialUser,
});

const useAuth = (): Readonly<Types.AuthContextProps> => useContext(AuthContext);

export { AuthContext, useAuth };
