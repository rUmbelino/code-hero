import React from 'react';

import { Event } from './Event';

export const Detail = ({ thumbnail, name, description, events }) => {
  const { path, extension } = thumbnail;

  return (
    <article className="d-flex flex-column justify-content-center card rounded">
      <img className="rounded" src={`${path}/portrait_xlarge.${extension}`} alt={name} />
      <h2 className="name py-1">{name}</h2>
      <section className="description">{description}</section>
      {events.items.map(({ name, resourceURI }) => (
        <Event key={name} resourceURI={resourceURI} />
      ))}
    </article>
  );
};
