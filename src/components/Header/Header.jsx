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
        <div className="candidate-info">
          <b className="candidate-name mr-1">Rafael Umbelino</b>
          <span className="candidate-label mr-1">Teste de front-end</span>
        </div>
        <img className="avatar" alt="candidate avatar" src={avatar} />
      </div>
    </header>
  );
};
