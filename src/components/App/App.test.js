import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import { Header } from '../Header';
import { Search } from '../Search';
import { Router } from '../Router';
import { StateManager } from '../StateManager';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render the State Manager', () => {
    expect(wrapper.find(StateManager).exists()).toBeTruthy();
  });

  it('should render the Header', () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });

  it('should render the Search', () => {
    expect(wrapper.find(Search).exists()).toBeTruthy();
  });

  it('should render the Router', () => {
    expect(wrapper.find(Router).exists()).toBeTruthy();
  });
});
