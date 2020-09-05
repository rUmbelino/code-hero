import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Pagination', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Button onClick={onClick} description="1" />);

  it('should render the value', () => {
    expect(wrapper.find('.description').text()).toBe('1');
  });

  it('should call onClick callback', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledWith(1);
  });
});
