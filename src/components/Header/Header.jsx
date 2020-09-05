import React from 'react';

import './assets/header.css';
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpeg';
import { Consumer } from '../StateManager';

export const Header = () => {
  return (
    <header className="d-flex justify-content-between p-1">
      <Consumer>
        {({ setSelectedCharacter }) => {
          return (
            <img
              src={logo}
              alt="objective logo"
              className="logo cursor-pointer"
              onClick={() => setSelectedCharacter(null)}
            />
          );
        }}
      </Consumer>

      <div className="d-flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rUmbelino"
          className="candidate-info text-decoration-none"
        >
          <b className="candidate-name mr-1">Rafael Umbelino</b>
          <span className="candidate-label mr-1">Teste de front-end</span>
        </a>
        <img className="avatar" alt="candidate avatar" src={avatar} />
      </div>
    </header>
  );
};
