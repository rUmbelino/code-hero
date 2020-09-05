import moxios from 'moxios';

import { character } from '../../utils/mock';
import {
  fetchCharacters,
  ITEM_PER_PAGE,
  ERROR_MESSAGE,
} from './fetchCharacters';

describe('fetchCharacters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

    expect(setCharacters).toHaveBeenLastCalledWith({
      list: [],
      total: 0,
      isLoading: false,
      error: ERROR_MESSAGE,
    });
  });

  it('should have success on fetch characters', async () => {
    const total = 250;
    moxios.stubRequest('/characters?limit=10&offset=0', {
      status: 200,
      response: {
        data: {
          total,
          results: [character],
        },
      },
    });

    const setCharacters = jest.fn();
    await fetchCharacters({ setCharacters });

    expect(setCharacters).toHaveBeenLastCalledWith({
      total,
      error: null,
      isLoading: false,
      list: [character],
    });
  });
});
