import React from 'react';
import { mount } from 'enzyme';

import { Provider } from '../StateManager';
import { Pagination } from './Pagination';
import { NUMBER_OF_BUTTONS } from './paginationController';

describe('Pagination', () => {
  const value = {
    currentPage: 1,
  };

  const wrapper = mount(
    <Provider value={value}>
      <Pagination />
    </Provider>,
  );

  it('should render the page itens', () => {
    expect(wrapper.find('.page-item').length).toBe(NUMBER_OF_BUTTONS);
  });
});
