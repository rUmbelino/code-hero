import { MD5 } from 'crypto-js';

export default () => {
  const { NODE_ENV, REACT_APP_MARVEL_PUBLIC_KEY = '', REACT_APP_MARVEL_PRIVATE_KEY = '' } = process.env;

  if (NODE_ENV === 'test') {
    return;
  }

  const ts = new Date().getTime();
  const hash = MD5(`${ts}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`).toString();

  return {
    ts,
    hash,
    apikey: REACT_APP_MARVEL_PUBLIC_KEY,
  };
};
