import axios from '../../utils/axios';

export const ITEMS_PER_PAGE = 10;
export const ERROR_MESSAGE = 'Ocorreu um erro ao listar os personagens';

export const fetchCharacters = async ({
  search,
  setCharacters,
  currentPage = 1,
}) => {
  try {
    setCharacters({ isLoading: true, list: [], error: null });

    const params = {
      limit: ITEMS_PER_PAGE,
      offset: (currentPage - 1) * ITEMS_PER_PAGE,
      nameStartsWith: search ? search : null,
    };

    const response = await axios.get('/characters', { params });
    const { total, results: list } = response.data.data;

    setCharacters({
      list,
      total,
      error: null,
      isLoading: false,
    });
  } catch (error) {
    setCharacters({
      list: [],
      total: 0,
      isLoading: false,
      error: ERROR_MESSAGE,
    });
  }
};
