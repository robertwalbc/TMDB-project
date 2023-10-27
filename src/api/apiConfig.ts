import axios from 'axios';
import { BASE_URL, API_KEY } from '../enviroments.ts';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJiNzc2Y2Q3MThjNTA4ZjcwODlmN2MxZWM3NWIyZCIsInN1YiI6IjY0ZjdmODQ2NGNjYzUwMDBlMWZmZjBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RPtIPOEbo_QeZzuRijZ2E2FEVyCUFYbRjTbdMNLb-zE'
  }
});

export default instance;