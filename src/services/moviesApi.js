import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f2c84021a1b27a980a95c22483ee4cb2';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY };

const getMovies = async (path, query = '', page = 1) => {
  try {
    const { data } = await axios.get(path, {
      params: { query: query, page: page },
    });
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default { getMovies };
