import React from 'react';
import { mount } from 'enzyme';

import { Provider } from '../StateManager';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  let wrapper;
  const mock = {
    search: 'initial input value',
    setSearch: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider value={mock}>
        <SearchBar />
      </Provider>,
    );
  });

  it('should render the input with correct initial value', () => {
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('should change value of search value in context', () => {
    wrapper.find('button').simulate('click');
    expect(mock.setSearch).toHaveBeenCalled();
  });
});
