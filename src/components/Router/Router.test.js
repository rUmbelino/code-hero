import React from 'react';
import { mount } from 'enzyme';

import { Router } from './Router';
import { Provider } from '../StateManager';
import { character } from '../../utils/mock';

describe('Router', () => {
  it('should return null when there is not match for page', () => {
    const wrapper = mount(
      <Provider
        value={{
          selectedCharacter: character.id,
          characters: {
            list: [character],
          },
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
        list: [character],
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
