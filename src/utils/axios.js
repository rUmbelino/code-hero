import axios from 'axios';

import generateParams from './generateMarvelParams';

export default axios.create({
  timeout: 10000,
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: generateParams(),
});
