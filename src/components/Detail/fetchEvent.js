import axios from '../../utils/axios';

export const fetchEvent = async (resourceURI) => {
  const response = await axios.get(resourceURI);

  const [event] = response.data.data.results;
  const { title, thumbnail, description } = event;
  const { path, extension } = thumbnail;

  return { title, thumbnail: `${path}/portrait_small.${extension}`, description };
};
