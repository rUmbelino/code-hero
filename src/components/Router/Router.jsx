import React from 'react';

import { Consumer } from '../StateManager';
import { Characters } from '../Characters';
import { Detail } from '../Detail';

export const Router = () => {
  return (
    <Consumer>
      {({ selectedCharacter }) => {
        if (selectedCharacter) return <Detail />;

        return <Characters />;
      }}
    </Consumer>
  );
};
