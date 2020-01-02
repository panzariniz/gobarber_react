import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

const api = axios.create({
  baseURL: baseApiUrl,
});

export default api;
