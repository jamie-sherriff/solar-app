import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.SOLAR_SERVER_URL,
  timeout: 30000,
  headers: {'X-Sherriff-Application': 'solar-app'}
});
