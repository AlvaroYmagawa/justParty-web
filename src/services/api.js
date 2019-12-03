import axios from 'axios';
// import strings from '~/strings';

const api = axios.create({
  //   baseURL: strings.baseUrl,
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
