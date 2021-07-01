import React, { ReactElement } from 'react';
import { Header, Image } from 'semantic-ui-react';

import './styles.scss';

const Navbar = (): ReactElement => (
  <div className="navbar">
    {console.log('here')}
    <Header className="title" content="POLARIO" as="h1" />
    <Image
      alt="User Name"
      size="mini"
      avatar
      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
    />
  </div>
);

export default Navbar;
