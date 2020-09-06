import React, { useState } from 'react';

import './assets/search.css';
import { Consumer } from '../StateManager';
import search from './assets/search.png';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const renderClose = ({ onSearch }) => {
    if (!inputValue) return null;

    return (
      <button
        className="position-absolute cursor-pointer clear"
        onClick={() => {
          onSearch('');
          setInputValue('');
        }}
      >
        x
      </button>
    );
  };

  return (
    <Consumer>
      {({ onSearch }) => {
        return (
          <div className="search-bar position-relative mt-1">
            <input placeholder="Search" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            {renderClose({ onSearch })}
            <button className="search position-absolute b-none cursor-pointer" onClick={() => onSearch(inputValue)}>
              <img src={search} alt="search icon" />
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};
