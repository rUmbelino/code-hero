import axios from '../../utils/axios';

export const fetchEvents = async (path) => {
  try {
    axios.get(path);
  } catch (error) {
    console.log(error);
  }
};
