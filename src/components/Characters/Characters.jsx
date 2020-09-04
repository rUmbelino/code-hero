import React from 'react';

export const Characters = ({ className }) => {
  return (
    <div className="characters-page">
      <div className="d-flex">
        <p className="characters">Personagem</p>
        <p className="series">Séries</p>
        <p className="events">Eventos</p>
      </div>
    </div>
  );
};
