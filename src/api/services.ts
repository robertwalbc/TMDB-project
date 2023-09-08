import instance from "./apiConfig";
import { TMDB_URLS } from "./urls";

export const getRequestToken = () => instance.get(TMDB_URLS.requestToken);

export const postSession = (username, password, request_token) => instance.post(TMDB_URLS.validateLogin, {username, password, request_token}); 

