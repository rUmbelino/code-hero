import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';

import { Event } from './Event';

describe('Event', () => {
  let wrapper;
  const resourceURI = 'resourceURI';
  const event = {
    title: 'Event title',
    thumbnail: 'link/portrait_small.jsx',
    description: 'Event long description',
  };

  beforeEach(() => {
    wrapper = shallow(<Event resourceURI={resourceURI} />, { disableLifecycleMethods: true });
    wrapper.setState({ isLoading: false, event });
  });

  it('should render the thumbnail', () => {
    const { src, alt } = wrapper.find('img').props();
    const { thumbnail, title } = event;

    expect(src).toBe(thumbnail);
    expect(alt).toBe(title);
  });

  it('should render the title', () => {
    expect(wrapper.find('.title').text()).toBe(event.title);
  });

  it('should render the description', () => {
    expect(wrapper.find('.description').text()).toBe(event.description);
  });
});
