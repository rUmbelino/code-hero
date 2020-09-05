import React from 'react';
import { mount } from 'enzyme';

import { Provider } from '../StateManager';
import { Pagination } from './Pagination';
import { getButotns } from './paginationController';

describe('Pagination', () => {
  const value = {
    currentPage: 5,
    setCurrentPage: jest.fn(),
    characters: {
      total: 200,
    },
  };

  const wrapper = mount(
    <Provider value={value}>
      <Pagination />
    </Provider>
  );

  it('should render the page itens', () => {
    const { currentPage } = value;
    const { total } = value.characters;
    const buttons = getButotns({ total, currentPage });

    expect(wrapper.find('.page-item').length).toBe(buttons.length);
  });
});
