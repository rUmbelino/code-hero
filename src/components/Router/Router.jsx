import React from 'react';

import { paths } from './constants';
import { Consumer } from '../StateManager';
import { Characters } from '../Characters';

export const Router = () => {
  return (
    <Consumer>
      {({ page }) => {
        if (page === paths.characters) return <Characters />;

        return null;
      }}
    </Consumer>
  );
};
