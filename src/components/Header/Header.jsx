import React from 'react';

import './assets/header.css';
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpeg';

export const Header = () => {
  return (
    <header className="d-flex justify-content-between p-1">
      <img className="logo" alt="objective logo" src={logo} />
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
