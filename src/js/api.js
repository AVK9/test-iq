import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/people/1/',
});

export const dataApi = async () => {
  const { data } = await api.get('');
  return data;
};
