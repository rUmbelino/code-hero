import React, { useState, useEffect } from 'react';

import { paths } from '../Router';
import { fetchCharacters } from './fetchCharacters';

export const initialState = {
  search: '',
  page: paths.characters,
  characters: {
    list: [],
    error: null,
    isLoading: false,
    currentPage: 1,
  },
};

export const StateManagerContext = React.createContext(initialState);
export const { Provider, Consumer } = StateManagerContext;

export const StateManager = ({ children }) => {
  const [page, setPage] = useState(initialState.page);
  const [search, setSearch] = useState(initialState.search);
  const [characters, setCharacters] = useState(initialState.characters);

  const { currentPage } = characters;

  useEffect(() => {
    fetchCharacters({ currentPage, setCharacters });
  }, []);

  const value = {
    page,
    setPage,
    search,
    setSearch,
    characters,
  };

  return <Provider value={value}>{children}</Provider>;
};
