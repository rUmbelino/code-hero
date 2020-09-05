import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';

import { Event } from './Event';

describe('Event', () => {
  const resourceURI = 'resourceURI';
  moxios.stubRequest(resourceURI, { status: 200 });
  const wrapper = shallow(<Event resourceURI={resourceURI} />);

  it('should render the event', () => {
    expect(wrapper.text()).toBe('Event');
  });
});
