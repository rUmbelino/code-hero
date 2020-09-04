import axios from '../../utils/axios';

export const fetchCharacters = async ({ setCharacters, currentPage }) => {
  try {
    setCharacters({ currentPage, isLoading: true, error: null, list: [] });

    const { data } = await axios.get('/characters');

    setCharacters({
      error: null,
      isLoading: false,
      list: data.data.results,
      currentPage,
    });
  } catch (error) {
    setCharacters({
      list: [],
      currentPage,
      isLoading: false,
      error: 'Ocorreu um erro ao listar os personagens',
    });
  }
};
