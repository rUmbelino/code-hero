import React from 'react';
import { shallow } from 'enzyme';

import { Event } from './Event';
import { Detail } from './Detail';
import { character } from '../../utils/mock';

describe('Detail', () => {
  const wrapper = shallow(<Detail {...character} />);

  it('should render the character image', () => {
    const { src, alt } = wrapper.find('img').props();
    const { path, extension } = character.thumbnail;
    const imgPath = `${path}/portrait_xlarge.${extension}`;

    expect(src).toBe(imgPath);
    expect(alt).toBe(character.name);
  });

  it('should render the character name', () => {
    expect(wrapper.find('.name').text()).toBe(character.name);
  });

  it('should render the character description', () => {
    expect(wrapper.find('.description').text()).toBe(character.description);
  });

  it('should render the events', () => {
    expect(wrapper.find(Event).length).toEqual(character.events.items.length);
  });
});
