import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gorila-backend.herokuapp.com/',
});

export default api;