import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('should render the logo', () => {
    const { src, alt } = wrapper.find('.logo').props();
    expect(src).toBe('logo.png');
    expect(alt).toBe('objective logo');
  });

  it('should render candidate name', () => {
    expect(wrapper.find('.candidate-name').text()).toBe('Rafael Umbelino');
  });

  it('should render candidate test label', () => {
    expect(wrapper.find('.candidate-label').text()).toBe('Teste de front-end');
  });

  it('should render the avatar', () => {
    const { src, alt } = wrapper.find('.avatar').props();
    expect(src).toBe('avatar.jpeg');
    expect(alt).toBe('candidate avatar');
  });
});
