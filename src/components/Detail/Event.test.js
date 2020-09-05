import React from 'react';
import { shallow } from 'enzyme';

import { Event } from './Event';

describe('Event', () => {
  const wrapper = shallow(<Event />);

  it('should render the event', () => {
    expect(wrapper.text()).toBe('Event');
  });
});
