import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import { Header } from '../Header';
import { StateManager } from '../StateManager';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should properly render the State Manager', () => {
    expect(wrapper.find(StateManager).exists()).toBeTruthy();
  });

  it('should properly render the Header', () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });
});
