import axios from 'axios';
import { BASE_URL, API_KEY } from '../enviroments.ts';

const instance = axios.create({
  baseURL: BASE_URL
  });

export default instance;