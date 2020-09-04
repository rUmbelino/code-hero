import axios from '../../utils/axios';

export const fetchCharacters = async (setCharacters) => {
  try {
    setCharacters({ isLoading: true, error: null, list: [] });

    const { data } = await axios.get('/characters');

    setCharacters({
      error: null,
      isLoading: false,
      list: data.results,
    });
  } catch (error) {
    setCharacters({
      list: [],
      isLoading: false,
      error: 'Ocorreu um erro ao listar os personagens',
    });
  }
};
