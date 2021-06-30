import React, { ReactElement, useState, useEffect } from 'react';

import { isError, getUsers } from '../../api';

import './styles.scss';

const Dashboard = (): ReactElement => {
  const [text, setText] = useState('You did not run local API!');

  useEffect(() => {
    const populateText = async (): Promise<void> => {
      const res = await getUsers();

      console.log(res);

      if (!isError(res)) {
        setText(res.data.message);
      } else {
        setText(res.type);
      }
    };

    populateText();
  }, []);

  return (
    <>
      <h1>MERN Template</h1>
      <p>
        Below will tell you if the API is running.
        <br />
        {text}
      </p>
    </>
  );
};

export default Dashboard;
