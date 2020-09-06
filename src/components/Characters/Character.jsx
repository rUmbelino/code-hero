import React from 'react';

export const Character = ({ id, thumbnail, name, description, events, onClick }) => {
  const { path, extension } = thumbnail;

  return (
    <div className="card rounded d-flex cursor-pointer row mb-1" onClick={() => onClick(id)}>
      <div className="d-flex column p-0">
        <img className="rounded" src={`${path}/portrait_small.${extension}`} alt={name} />
        <b className="name pl-1">{name}</b>
      </div>
      <div className="column mobile-hidden">
        <p className="description">{description}</p>
      </div>
      <div className="column mobile-hidden">
        {events.items.map(({ name }) => (
          <p className="event" key={name}>
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};
