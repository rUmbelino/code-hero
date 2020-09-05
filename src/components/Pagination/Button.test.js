import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Pagination', () => {
  const wrapper = shallow(<Button description="1" />);

  it('should render the value', () => {
    expect(wrapper.find('.description').text()).toBe('1');
  });
});
