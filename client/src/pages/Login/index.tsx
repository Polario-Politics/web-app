import React, { ReactElement } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import { buildURI } from '../../api';
import { FRONTEND_BASE_URL } from '../../api/urls';
import Logo from '../../assets/polario.png';
import { useAuth } from '../../context/auth';
import './styles.scss';

const LOGIN_FAILURE_QUERY_PARAM = 'failure';

const Login = (): ReactElement => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Redirect to="/" />}
      <div className="login">
        <Card className="card">
          <Card.Content className="content">
            <Image circular alt="polario" src={Logo} size="small" />
            <a
              className="login-btn"
              href={buildURI(
                'auth/login',
                `${FRONTEND_BASE_URL}/`,
                `${FRONTEND_BASE_URL}/login?${LOGIN_FAILURE_QUERY_PARAM}=1`,
              )}
            >
              <Icon size="large" name="google" />
              Login to Google
            </a>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};
export default Login;
