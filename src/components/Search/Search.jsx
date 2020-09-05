import React from 'react';
import { SearchBar } from './SearchBar';

export const Search = () => {
  return (
    <div className="search-content py-1">
      <h2 className="title">Busca de personagens</h2>
      <b className="character-name">Nome do personagem</b>
      <SearchBar />
    </div>
  );
};
