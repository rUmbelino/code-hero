import React from 'react';
import { mount } from 'enzyme';

import { Router } from './Router';
import { Provider } from '../StateManager';

describe('Router', () => {
  it('should return null when there is not match for page', () => {
    const wrapper = mount(
      <Provider
        value={{
          selectedCharacter: 1,
        }}
      >
        <Router />
      </Provider>,
    );
    expect(wrapper.find('.characters-page').exists()).toBeFalsy();
  });

  it('should return Characters when characters are in the page', () => {
    const value = {
      selectedCharacter: null,
      characters: {
        list: [],
      },
    };

    const wrapper = mount(
      <Provider value={value}>
        <Router />
      </Provider>,
    );
    expect(wrapper.find('.characters-page').exists()).toBeTruthy();
  });
});
