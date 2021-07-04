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
  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
