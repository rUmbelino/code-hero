import React from 'react';

import { Header } from '../Header';
import { Search } from '../Search';
import { Router } from '../Router';
import { StateManager } from '../StateManager';

export const App = () => {
  return (
    <StateManager>
      <Header />
      <Search />
      <Router />
    </StateManager>
  );
};
