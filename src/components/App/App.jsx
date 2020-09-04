import React from 'react';

import { Header } from '../Header';
import { StateManager } from '../StateManager';

export const App = () => {
  return (
    <StateManager>
      <Header />
    </StateManager>
  );
};
