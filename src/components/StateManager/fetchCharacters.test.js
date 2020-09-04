import moxios from 'moxios';

import { fetchCharacters } from './fetchCharacters';

describe('fetchCharacters', () => {
  it('should successfully fetch characters', async () => {
    const setCharacters = jest.fn();
    const response = {
      data: {
        data: {
          results: [{ name: 'Umbelex' }],
        },
      },
    };

    moxios.stubRequest('/characters', { status: 200, response });

    await fetchCharacters({ setCharacters });

    expect(setCharacters).toHaveBeenLastCalledWith({
      error: null,
      isLoading: false,
      list: response.results,
    });
  });

  it('should have error on fetch characters', async () => {
    const setCharacters = jest.fn();

    moxios.stubRequest('/characters', { status: 500 });

    await fetchCharacters({ setCharacters });

    expect(setCharacters).toHaveBeenLastCalledWith({
      error: 'Ocorreu um erro ao listar os personagens',
      isLoading: false,
      list: [],
    });
  });
});
