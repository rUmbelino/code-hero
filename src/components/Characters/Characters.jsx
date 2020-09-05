import React from 'react';

import { Loading } from '../Loading';
import { Consumer } from '../StateManager';
import { Character } from './Character';

export const Characters = () => {
  return (
    <Consumer>
      {({ characters }) => {
        const renderCharacters = () => {
          const { list, error, isLoading } = characters;

          if (isLoading) {
            return <Loading />;
          }

          if (error) {
            return <p className="text-danger py-1">{error}</p>;
          }

          return list.map((character) => {
            return <Character key={`character-${character.id}`} {...character} />;
          });
        };

        return (
          <div className="characters-page">
            <div className="row">
              <p className="characters column pl-2">Personagem</p>
              <p className="series column mobile-hidden">Séries</p>
              <p className="events column mobile-hidden">Eventos</p>
            </div>
            {renderCharacters()}
          </div>
        );
      }}
    </Consumer>
  );
};
