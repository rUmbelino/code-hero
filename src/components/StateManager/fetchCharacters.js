import axios from '../../utils/axios';

export const ITEM_PER_PAGE = 10;
export const ERROR_MESSAGE = 'Ocorreu um erro ao listar os personagens';

export const fetchCharacters = async ({ setCharacters, currentPage = 1, search }) => {
  try {
    setCharacters({ isLoading: true, list: [], error: null });

    const params = {
      limit: ITEM_PER_PAGE,
      offset: (currentPage - 1) * ITEM_PER_PAGE,
      nameStartsWith: search ? search : null,
    };

    const { data } = await axios.get('/characters', { params });

    setCharacters({
      error: null,
      isLoading: false,
      list: data.data.results,
    });
  } catch (error) {
    setCharacters({
      list: [],
      isLoading: false,
      error: ERROR_MESSAGE,
    });
  }
};
