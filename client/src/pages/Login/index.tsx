import React, { ReactElement } from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import Logo from '../../assets/polario.png';

import './styles.scss';

const Login = (): ReactElement => (
  <div className="login">
    <Card className="card">
      <Card.Content className="content">
        <Image circular alt="polario" src={Logo} size="small" />
        <a className="login-btn" href="/login">
          <Icon size="large" name="google" />
          Login to Google
        </a>
      </Card.Content>
    </Card>
  </div>
);

export default Login;
