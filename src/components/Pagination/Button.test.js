import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Pagination', () => {
  const setCurrentPage = jest.fn();
  const wrapper = shallow(
    <Button setCurrentPage={setCurrentPage} description='1' />
  );

  it('should render the value', () => {
    expect(wrapper.find('.description').text()).toBe('1');
  });

  it('should call setCurrentPage callback', () => {
    wrapper.simulate('click');
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });
});
