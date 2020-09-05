import React from 'react';
import { shallow } from 'enzyme';

import { Detail } from './Detail';

describe('Detail', () => {
  const wrapper = shallow(<Detail />);

  it('should render Detail page', () => {
    expect(wrapper.text()).toBe('Detail Page');
  });
});
