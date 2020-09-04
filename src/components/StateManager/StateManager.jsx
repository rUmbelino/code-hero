import React, { useState } from 'react';

export const initialState = {
  search: '',
  page: 'home',
  characters: [],
  currentPage: 1,
};

export const StateManagerContext = React.createContext(initialState);
export const { Provider, Consumer } = StateManagerContext;

export const StateManager = ({ children }) => {
  const [page, setPage] = useState(initialState.page);
  const [search, setSearch] = useState(initialState.search);
  const [characters, setCharacters] = useState(initialState.characters);
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);

  const value = {
    page,
    setPage,
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    characters: [...characters],
    setCharacters: (characters) => setCharacters([...characters]),
  };

  return <Provider value={value}>{children}</Provider>;
};
