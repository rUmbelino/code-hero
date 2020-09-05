import React from 'react';

import { Event } from './Event';

export const Detail = ({ thumbnail, name, description, events }) => {
  const { path, extension } = thumbnail;

  const EVENTS_TITLE = 'Eventos:';

  const title = events.items.length ? EVENTS_TITLE : '';

  return (
    <article className="card rounded">
      <div className="d-flex">
        <img className="rounded" src={`${path}/portrait_xlarge.${extension}`} alt={name} />
        <div className="ml-1">
          <h2 className="name py-1">{name}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <section className="d-flex flex-column justify-content-center my-1">
        <h3 className="align-self-start  my-1">{title}</h3>
        {events.items.map(({ name, resourceURI }) => (
          <Event key={name} resourceURI={resourceURI} />
        ))}
      </section>
    </article>
  );
};
