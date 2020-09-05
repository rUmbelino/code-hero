import React from 'react';
import { mount } from 'enzyme';

import { Characters } from './Characters';
import { Provider } from '../StateManager';
import { Character } from './Character';

describe('Characters', () => {
  const character = {
    id: 1,
    name: '3-D Man',
    description: '',
    thumbnail: {
      path: '',
    },
    events: { items: [{ name: 'event one' }] },
  };

  const value = {
    characters: {
      list: [character],
    },
  };
  const wrapper = mount(
    <Provider value={value}>
      <Characters />
    </Provider>,
  );

  it('should render the titles', () => {
    expect(wrapper.find('.characters').text()).toBe('Personagem');
    expect(wrapper.find('.series').text()).toBe('Séries');
    expect(wrapper.find('.events').text()).toBe('Eventos');
  });

  it('should render charactesr', () => {
    expect(wrapper.find(Character).length).toBe(value.characters.list.length);
  });
});
