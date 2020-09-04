import React from 'react';
import { mount } from 'enzyme';

import { Router } from './Router';
import { Provider, Consumer } from '../StateManager';

describe('Router', () => {
  const wrapper = mount(
    <Provider value={{}}>
      <Router />
    </Provider>,
  );

  it('should return null when there is not match for page', () => {
    expect(wrapper.html()).toBeNull();
  });
});
