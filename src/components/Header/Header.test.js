import React from 'react';
import { mount } from 'enzyme';

import { Header } from './Header';
import { Provider } from '../StateManager';

describe('Header', () => {
  const value = {
    setSelectedCharacter: jest.fn(),
  };
  const wrapper = mount(
    <Provider value={value}>
      <Header />
    </Provider>,
  );

  it('should render the logo', () => {
    const { src, alt } = wrapper.find('.logo').props();
    expect(src).toBe('logo.png');
    expect(alt).toBe('objective logo');
  });

  it('should call setSelecterCharacter with null on click in logo', () => {
    wrapper.find('.logo').simulate('click');
    expect(value.setSelectedCharacter).toHaveBeenCalledWith(null);
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
