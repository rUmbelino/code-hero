import React from 'react';
import { mount, shallow } from 'enzyme';

import { Event } from './Event';
import { Detail } from './Detail';
import { character } from '../../utils/mock';
import { Provider } from '../StateManager';

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

  describe('context tests', () => {
    const value = {
      setSelectedCharacter: jest.fn(),
    };

    const wrapper = mount(
      <Provider value={value}>
        <Detail {...character} />
      </Provider>
    );

    it('should clear selecter user on click on go back', () => {
      wrapper.find('button').simulate('click');
      expect(value.setSelectedCharacter).toHaveBeenCalledWith(null);
    });
  });
});
