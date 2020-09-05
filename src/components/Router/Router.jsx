import React from 'react';

import { Consumer } from '../StateManager';
import { Characters } from '../Characters';
import { Detail } from '../Detail';

export const Router = () => {
  return (
    <Consumer>
      {({ characters, selectedCharacter }) => {
        const getSelectedCharacter = () => {
          return characters.list.find(({ id }) => id === selectedCharacter);
        };

        if (selectedCharacter) {
          return <Detail {...getSelectedCharacter()} />;
        }

        return <Characters />;
      }}
    </Consumer>
  );
};
