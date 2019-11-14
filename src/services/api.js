import axios from 'axios';
import strings from '~/strings';

const api = axios.create({
  baseURL: strings.baseUrl,
});

export default api;
