// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import { configure } from 'enzyme';
import axios from './utils/axios';

configure({ adapter: new Adapter() });

beforeEach(() => {
  moxios.install(axios);
});

afterEach(() => {
  moxios.uninstall(axios);
});
