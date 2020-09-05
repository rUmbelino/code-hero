import React from 'react';

import { Header } from '../Header';
import { Search } from '../Search';
import { Router } from '../Router';
import { Pagination } from '../Pagination';
import { StateManager } from '../StateManager';

export const App = () => {
  return (
    <StateManager>
      <Header />
      <div className="container">
        <Search />
        <Router />
      </div>
      <Pagination />
    </StateManager>
  );
};
