import React from 'react';

import { Event } from './Event';
import { Consumer } from '../StateManager';

export const Detail = ({ thumbnail, name, description, events }) => {
  const { path, extension } = thumbnail;

  const EVENTS_TITLE = 'Eventos:';

  const title = events.items.length ? EVENTS_TITLE : '';

  return (
    <div className="container ">
      <article className="card rounded">
        <Consumer>
          {({ setSelectedCharacter }) => (
            <button className="my-1 cursor-pointer" onClick={() => setSelectedCharacter(null)}>
              &#8592; voltar
            </button>
          )}
        </Consumer>

        <div className="d-flex">
          <img alt={name} className="rounded" src={`${path}/portrait_xlarge.${extension}`} />
          <div className="ml-1">
            <h2 className="name py-1">{name}</h2>
            <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
        <section className="d-flex flex-column justify-content-center my-1">
          <h3 className="align-self-start  my-1">{title}</h3>
          {events.items.map(({ name, resourceURI }, index) => (
            <Event key={`${name}_${index}`} resourceURI={resourceURI} />
          ))}
        </section>
      </article>
    </div>
  );
};
