import React from 'react';
import { shallow } from 'enzyme';

import { Characters } from './Characters';

describe('Characters', () => {
  const wrapper = shallow(<Characters />);

  it('should render the titles', () => {
    expect(wrapper.find('.characters').text()).toBe('Personagem');
    expect(wrapper.find('.series').text()).toBe('Séries');
    expect(wrapper.find('.events').text()).toBe('Eventos');
  });
});
