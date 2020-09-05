import React from 'react';

import { Consumer } from '../StateManager';
import { Character } from './Character';

export const Characters = () => {
  return (
    <Consumer>
      {({ characters }) => (
        <div className="characters-page">
          <div className="row">
            <p className="characters column pl-2">Personagem</p>
            <p className="series column mobile-hidden">Séries</p>
            <p className="events column mobile-hidden">Eventos</p>
          </div>
          {characters.list.map((character) => {
            return <Character key={character.id} {...character} />;
          })}
        </div>
      )}
    </Consumer>
  );
};
