import axios from '../../utils/axios';

export const fetchCharacters = async (setCharacters) => {
  try {
    setCharacters({ isLoading: true, error: null });

    const { data } = await axios.get('/characters');

    setCharacters({
      error: null,
      isLoading: false,
      list: data.data.results,
    });
  } catch (error) {
    setCharacters({
      list: [],
      isLoading: false,
      error: 'Ocorreu um erro ao listar os personagens',
    });
  }
};
