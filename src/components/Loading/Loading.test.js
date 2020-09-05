import React from 'react';
import { shallow } from 'enzyme';

import { Loading } from './Loading';

describe('Loading', () => {
  const wrapper = shallow(<Loading />);

  it('should render the loading gif', () => {
    const { src, alt } = wrapper.find('img').props();
    expect(src).toBe('loading.gif');
    expect(alt).toBe('loading gif');
  });
});
