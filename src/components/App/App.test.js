import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should properly render the App', () => {
    expect(wrapper.find('.App').text()).toBe('Hello World');
  });
});
