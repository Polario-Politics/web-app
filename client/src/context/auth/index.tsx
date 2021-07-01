import React, { ReactElement, FC, useState, useEffect } from 'react';

import { getCurrentUser, isError } from '../../api';
import { initialUser } from '../../utils/constants';

import { AuthContext, useAuth } from './context';
import { AuthContextProps } from './types';

const AuthProvider: FC = ({ children }): ReactElement => {
  const [auth, setAuth] = useState<AuthContextProps>({
    isAuthenticated: false,
    user: initialUser,
  });

  useEffect(() => {
    const loadCurrentUser = async (): Promise<void> => {
      const res = await getCurrentUser();

      if (!isError(res)) {
        setAuth({
          isAuthenticated: true,
          user: res.data.result,
        });
      }
    };

    loadCurrentUser();
  }, []);

  const login = (): void => {
    window.location.href =
      'http://localhost:9000/api/auth/login?successRedirect=http%3A%2F%2Flocalhost%3A3000%2Flogin&failureRedirect=http%3A%2F%2Flocalhost%3A3000%2Flogin%3Ffailure%3D1';
  };

  const logout = (): void => {
    console.log('logout');
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
