import instance from "./apiConfig.ts";
import { TMDB_URLS } from "./urls.ts";
import { API_KEY } from "../enviroments.ts";

export const getRequestToken = () => instance.get(`${TMDB_URLS.requestToken}?api_key=${API_KEY}`);

export const postSession = (username, password, request_token) => instance.post(`${TMDB_URLS.validateLogin}?api_key=${API_KEY}`, {username, password, request_token});