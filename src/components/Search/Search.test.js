import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';
import { SearchBar } from './SearchBar';

describe('Search', () => {
  const wrapper = shallow(<Search />);

  it('should render the title', () => {
    expect(wrapper.find('.title').text()).toBe('Busca de personagens');
  });

  it('should render character name label', () => {
    expect(wrapper.find('.character-name').text()).toBe('Nome do personagem');
  });

  it('should render the SearchBar', () => {
    expect(wrapper.find(SearchBar).exists()).toBeTruthy();
  });
});
