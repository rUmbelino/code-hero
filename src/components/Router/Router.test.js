import React from 'react';
import { mount } from 'enzyme';

import { Router } from './Router';
import { paths } from './constants';
import { Provider } from '../StateManager';

describe('Router', () => {
  it('should return null when there is not match for page', () => {
    const wrapper = mount(
      <Provider value={{}}>
        <Router />
      </Provider>,
    );
    expect(wrapper.html()).toBeNull();
  });

  it('should return Characters when characters are in the page', () => {
    const wrapper = mount(
      <Provider value={{ page: paths.characters }}>
        <Router />
      </Provider>,
    );
    expect(wrapper.find('.characters-page').exists()).toBeTruthy();
  });
});
