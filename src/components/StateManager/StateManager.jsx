import React, { useState, useEffect } from 'react';

import { paths } from '../Router';
import { fetchCharacters } from './fetchCharacters';

export const initialState = {
  search: '',
  page: paths.characters,
  currentPage: 1,
  characters: {
    list: [],
    error: null,
    isLoading: false,
  },
};

export const StateManagerContext = React.createContext(initialState);
export const { Provider, Consumer } = StateManagerContext;

export const StateManager = ({ children }) => {
  const [page, setPage] = useState(initialState.page);
  const [search, setSearch] = useState(initialState.search);
  const [characters, setCharacters] = useState(initialState.characters);
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);

  useEffect(() => {
    fetchCharacters(setCharacters);
  }, [currentPage]);

  const value = {
    page,
    setPage,
    search,
    setSearch,
    characters,
    currentPage,
    setCurrentPage,
  };

  return <Provider value={value}>{children}</Provider>;
};
