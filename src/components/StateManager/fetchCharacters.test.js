import moxios from 'moxios';

import { character } from '../../utils/mock';
import { fetchCharacters, ITEM_PER_PAGE, ERROR_MESSAGE } from './fetchCharacters';

describe('fetchCharacters', () => {
  it('should call fetchCharacters with the proper params', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      expect(request.config.params).toEqual({
        offset: 0,
        limit: ITEM_PER_PAGE,
        nameStartsWith: null,
      });

      done();
    });

    const setCharacters = jest.fn();
    fetchCharacters({ setCharacters });
  });

  it('should have error on fetch characters', async () => {
    moxios.stubRequest('/characters?limit=10&offset=0', { status: 500 });

    const setCharacters = jest.fn();
    await fetchCharacters({ setCharacters });

    expect(setCharacters).toHaveBeenNthCalledWith(1, { isLoading: true, list: [], error: null });
    expect(setCharacters).toHaveBeenNthCalledWith(2, { isLoading: false, list: [], error: ERROR_MESSAGE });
  });

  it('should have success on fetch characters', async () => {
    moxios.stubRequest('/characters?limit=10&offset=0', {
      status: 200,
      response: {
        data: {
          results: [character],
        },
      },
    });

    const setCharacters = jest.fn();
    await fetchCharacters({ setCharacters });

    expect(setCharacters).toHaveBeenNthCalledWith(1, { isLoading: true, list: [], error: null });
    expect(setCharacters).toHaveBeenNthCalledWith(2, { isLoading: false, list: [character], error: null });
  });
});
