import React from 'react';

export const Character = ({ thumbnail, name, description, events }) => {
  return (
    <div className="d-flex">
      <img src={thumbnail.path} alt={name} />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      {events.items.map((event) => (
        <p className="event" key={event.name}>
          {event.name}
        </p>
      ))}
    </div>
  );
};
