import React, { useState } from 'react';

import './assets/search.css';
import { Consumer } from '../StateManager';
import search from './assets/search.png';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Consumer>
      {({ setSearch }) => {
        return (
          <div className="search-bar position-relative mt-1">
            <input placeholder="Search" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button className="search position-absolute  b-none cursor-pointer " onClick={() => setSearch(inputValue)}>
              <img src={search} alt="search icon" />
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};
