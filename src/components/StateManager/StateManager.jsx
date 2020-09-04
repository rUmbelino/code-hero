import React from 'react';

export const initialState = {
  search: '',
  page: 'home',
  characters: [],
  currentPage: 1,
};

export const { Provider, Consumer } = React.createContext(initialState);

export class StateManager extends React.Component {
  state = initialState;

  changeState = (key, value) => this.setState({ [key]: value });

  render() {
    const { page, search, characters, currentPage } = this.state;

    const value = {
      page,
      setPage: (page) => this.changeState('page', page),
      search,
      setSearch: (search) => this.changeState('search', search),
      currentPage,
      setCurrentPage: (currentPage) => this.changeState('currentPage', currentPage),
      characters: [...characters],
      setCharacters: (characters) => this.changeState('characters', [...characters]),
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
