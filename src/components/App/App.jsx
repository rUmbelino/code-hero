import React from 'react';

import { Header } from '../Header';
import { StateManager } from '../StateManager';
import { Search } from '../Search/Search';

export const App = () => {
  return (
    <StateManager>
      <Header />
      <Search />
    </StateManager>
  );
};
