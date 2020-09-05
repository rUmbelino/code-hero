import React, { useState, useEffect } from 'react';

import { fetchCharacters } from './fetchCharacters';

export const initialState = {
  search: '',
  currentPage: 1,
  selectedCharacter: null,
  characters: {
    list: [],
    total: 0,
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
  const [selectedCharacter, setSelectedCharacter] = useState(
    initialState.selectedCharacter
  );

  useEffect(() => {
    setSelectedCharacter(null);
    fetchCharacters({ setCharacters, currentPage, search });
  }, [currentPage, search]);

  const onSearch = (key) => {
    setCurrentPage(1);
    setSearch(key);
  };

  const value = {
    page,
    setPage,
    search,
    onSearch,
    characters,
    currentPage,
    setCurrentPage,
    selectedCharacter,
    setSelectedCharacter,
  };

  return <Provider value={value}>{children}</Provider>;
};
