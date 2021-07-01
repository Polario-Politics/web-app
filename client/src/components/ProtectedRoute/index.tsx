import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../../context/auth';
import Navbar from '../Navbar';

const ProtectedRoute: FC<RouteProps> = ({ ...routeProps }) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <Route
          exact={routeProps.exact}
          path={routeProps.path}
          render={(props) => (
            <>
              <Navbar />
              {React.createElement(routeProps.component!, props)}
            </>
          )}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
