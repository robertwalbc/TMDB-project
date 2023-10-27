import instance from "./apiConfig.ts";
import { TMDB_URLS } from "./urls.ts";
import { API_KEY } from "../enviroments.ts";

export const getRequestToken = () => instance.get(`${TMDB_URLS.requestToken}?api_key=${API_KEY}`);

export const postSession = (username, password, request_token) => instance.post(`${TMDB_URLS.validateLogin}?api_key=${API_KEY}`, {username, password, request_token});

export const getMovieByID = (movieID) => instance.get(`${TMDB_URLS.movByID}${movieID}`);

export const getNowPlayingMovies = () => instance.get(`${TMDB_URLS.movNowPlaying}?api_key=${API_KEY}&language=en-US&page=1`);

export const getPopularMovies = () => instance.get(`${TMDB_URLS.movPopular}?api_key=${API_KEY}&language=en-US&page=1`);

export const getTopRatedMovies = () => instance.get(`${TMDB_URLS.movTopRated}?api_key=${API_KEY}&language=en-US&page=1`);

export const getUpcomingMovies = () => instance.get(`${TMDB_URLS.movUpcoming}?api_key=${API_KEY}&language=en-US&page=1`);