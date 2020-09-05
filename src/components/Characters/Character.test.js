import React from 'react';
import { shallow } from 'enzyme';

import { Character } from './Character';

describe('Character', () => {
  const character = {
    id: 1,
    name: '3-D Man',
    description: '',
    thumbnail: {
      path: 'image-path',
      extension: 'jpg',
    },
    events: { items: [{ name: 'event one' }] },
  };
  const wrapper = shallow(<Character {...character} />);

  it('should render the character thumbnail', () => {
    const { path, extension } = character.thumbnail;
    const imgPath = `${path}/portrait_small.${extension}`;
    const { src } = wrapper.find('img').props();
    expect(src).toBe(imgPath);
  });

  it('should render the character name', () => {
    expect(wrapper.find('.name').text()).toBe(character.name);
  });

  it('should render the character description', () => {
    expect(wrapper.find('.description').text()).toBe(character.description);
  });

  it('should render the character events', () => {
    expect(wrapper.find('.event').length).toBe(character.events.items.length);
  });
});
