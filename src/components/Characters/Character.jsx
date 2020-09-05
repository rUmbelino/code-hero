import React from 'react';

export const Character = ({ thumbnail, name, description, events }) => {
  const { path, extension } = thumbnail;

  return (
    <div className="card rounded d-flex row mb-1">
      <div className="d-flex column p-0">
        <img className="rounded" src={`${path}/portrait_small.${extension}`} alt={name} />
        <b className="name pl-1">{name}</b>
      </div>
      <div className="column mobile-hidden">
        <p className="description">{description}</p>
      </div>
      <div className="column mobile-hidden">
        {events.items.map((event) => (
          <p className="event" key={event.name}>
            {event.name}
          </p>
        ))}
      </div>
    </div>
  );
};
