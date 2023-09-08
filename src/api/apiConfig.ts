import axios from 'axios';
import { BASE_URL, API_KEY } from '../enviroments';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json', 'api-key': API_KEY},
  });
});

export default instance;