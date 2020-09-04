import React from 'react';

import { Consumer } from '../StateManager';
import { Character } from './Character';

export const Characters = () => {
  return (
    <Consumer>
      {({ characters }) => (
        <div className="characters-page">
          <div className="d-flex">
            <p className="characters">Personagem</p>
            <p className="series">Séries</p>
            <p className="events">Eventos</p>
          </div>
          {characters.list.map((character) => {
            return <Character key={character.id} {...character} />;
          })}
        </div>
      )}
    </Consumer>
  );
};
